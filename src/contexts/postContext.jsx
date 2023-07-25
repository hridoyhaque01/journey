import imageCompression from "browser-image-compression";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseFirestore, storage } from "../firebase/firebase.config";

const PostContext = createContext();

export const usePosts = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [requestLoading, setRequestLoading] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [post, setPost] = useState({ lessons: [] });

  const fetchPosts = async () => {
    const ref = collection(firebaseFirestore, "posts");
    getDocs(ref)
      .then((res) => {
        const data = res?.docs?.map((doc) => ({
          ...doc?.data(),
        }));
        setPosts(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      });
  };

  const getImageUrl = async (file) => {
    try {
      const storageRef = ref(storage, `files/${Date.now()}-${file?.name}`);
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 0.058,
        maxIteration: 30,
      });
      const uploadResult = await uploadBytes(storageRef, compressedFile);
      const downloadUrl = await getDownloadURL(
        ref(storage, uploadResult?.ref?.fullPath)
      );
      return downloadUrl;
    } catch (error) {
      throw error;
    }
  };

  const uploadPost = async (data) => {
    const { file, title, place } = data || {};
    setRequestLoading(true);
    setRequestError(false);
    setRequestSuccess(false);
    try {
      const id = Date.now().toString();
      const ref = doc(firebaseFirestore, "posts", id);
      const timestamp = serverTimestamp();
      const thumbnailUrl = await getImageUrl(file);
      await setDoc(ref, {
        thumbnailUrl,
        id,
        timestamp,
        title,
        place,
      });
      setPost((prevPost) => ({
        ...prevPost,
        thumbnailUrl,
        id,
        timestamp,
        title,
        place,
      }));

      setRequestLoading(false);
      setRequestError(false);
      setRequestSuccess(true);
      fetchPosts();
    } catch (error) {
      console.log(error);
      setRequestLoading(false);
      setRequestSuccess(false);
      setRequestError(true);
      throw error;
    }
  };

  const updatePost = async (data, quotePreveiw, id) => {
    const { file, title } = data || {};
    console.log(id, data, quotePreveiw);
    setRequestLoading(true);
    setRequestError(false);
    setRequestSuccess(false);
    try {
      const ref = doc(firebaseFirestore, "posts", id);
      const thumbnailUrl = await getImageUrl(file);
      // Update the lessons array using arrayUnion
      await updateDoc(ref, {
        lessons: arrayUnion({
          thumbnailUrl,
          title,
          id: post?.lessons?.length + 1,
        }),
      });

      const newLesson = {
        thumbnailUrl: quotePreveiw,
        title,
        id: post?.lessons?.length + 1,
      };

      setPost((prevPost) => ({
        ...prevPost,
        lessons: [...prevPost.lessons, newLesson],
      }));

      console.log(post);
      fetchPosts();
      setRequestLoading(false);
      setRequestError(false);
      setRequestSuccess(true);
    } catch (error) {
      console.log(error);
      setRequestLoading(false);
      setRequestSuccess(false);
      setRequestError(true);
      throw error;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const value = {
    uploadPost,
    isLoading,
    isError,
    posts,
    requestLoading,
    requestSuccess,
    requestError,
    post,
    setPost,
    updatePost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
