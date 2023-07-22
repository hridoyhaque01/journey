import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import "./App.css";
import { firebaseFirestore, storage } from "./firebase/firebase.config";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [requestLoading, setRequestLoading] = useState(false);
  const [file, setFile] = useState(null);

  const getImageUrl = async (file) => {
    try {
      const storageRef = ref(storage, `files/${Date.now()}-${file?.name}`);
      const uploadResult = await uploadBytes(storageRef, "files");
      const downloadUrl = await getDownloadURL(
        ref(storage, uploadResult?.ref?.fullPath)
      );
      return downloadUrl;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRequestLoading(true);
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const timestamp = Date.now().toString();
    const postRef = doc(firebaseFirestore, "posts", timestamp);
    getImageUrl(file)
      .then((res) =>
        setDoc(postRef, { id: timestamp, title, description, imageUrl: res })
          .then((res) => {
            setPosts((prev) => [
              ...prev,
              { id: timestamp, title, description, imageUrl: res },
            ]);
            setRequestLoading(false);
            form.reset();
            console.log(res);
          })
          .catch((err) => {
            setRequestLoading(false);
            console.log(err);
          })
      )
      .catch((err) => {
        setRequestLoading(false);
        console.log(err);
      });
  };

  const fetchPosts = async () => {
    const postRef = collection(firebaseFirestore, "posts");
    getDocs(postRef)
      .then((res) => {
        const data = res?.docs?.map((doc) => ({
          ...doc?.data(),
        }));
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = async (id) => {
    setRequestLoading(true);
    const ref = doc(firebaseFirestore, "posts", id);
    deleteDoc(ref)
      .then((res) => {
        console.log(res);
        const newData = posts?.filter((post) => post?.id !== id);
        setPosts(newData);
        setRequestLoading(false);
      })
      .catch((err) => {
        console.log(res);
        setRequestLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-slate-50 min-h-screen flex items-center justify-center px-10">
      <div className="flex items-center gap-10">
        <div className="grid grid-cols-4 gap-6">
          {posts?.map((post, i) => (
            <div
              className="p-10 bg-white rounded-md shadow-xl relative w-full gap-6"
              key={i}
            >
              <h1 className="text-2xl text-slate-900 font-bold">
                {post?.title}
              </h1>
              <p className="text-slate-500 mt-2">{post?.description}</p>
              <div className="absolute top-3 right-3">
                <button
                  className="bg-slate-200 w-10 h-10 flex items-center justify-center rounded-full"
                  onClick={() => handleDelete(post?.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="delete"
                    className="w-6 h-6"
                  >
                    <g fill="none" fillRule="evenodd" stroke="#fc3636">
                      <path d="M5.5 7.5V20A1.5 1.5 0 0 0 7 21.5h11a1.5 1.5 0 0 0 1.5-1.5V7.5h-14z"></path>
                      <path
                        strokeLinecap="round"
                        d="M8.5 10.41v8.18M12.5 10.41v8.18M16.5 10.41v8.18M9 4.333V3.244C9 2.557 9.627 2 10.4 2h4.2c.773 0 1.4.557 1.4 1.244v1.09"
                      ></path>
                      <rect
                        width="18"
                        height="3"
                        x="3.5"
                        y="4.5"
                        rx="1.5"
                      ></rect>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <form
          action="#"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div>
            <input
              type="text"
              placeholder="Enter title..."
              name="title"
              className="w-80 border border-slate-300 outline-none p-4 rounded-md"
              required
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="description..."
              name="description"
              className="w-80 h-40 border border-slate-300 outline-none p-4 rounded-md"
              required
            />
          </div>
          <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div>
            <button
              type="submit"
              className="px-8 py-3 bg-blue-500 text-white text-lg font-semibold capitalize rounded-md"
              disabled={requestLoading}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default App;
