import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { createContext, useContext, useState } from "react";
import app from "../firbase";

const WallpaperContext = createContext();
const db = getFirestore(app);
const storage = getStorage();

export const useWallpaper = () => {
  return useContext(WallpaperContext);
};

export const WallpaperProvider = ({ children }) => {
  const [wallpapers, setWallpapers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImageUrl = async (path) => {
    try {
      const imageUrl = await getDownloadURL(ref(storage, path));
      return imageUrl;
    } catch (err) {
      console.log(err);
    }
  };

  const updateWallpaper = async (id, data) => {
    console.log(id, data);
    const docRef = doc(db, "wallpapers", id);
    try {
      await updateDoc(docRef, data);
      fetchWallpapers();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteWallpaper = async (id) => {
    const docRef = doc(db, "wallpapers", id);
    try {
      await deleteDoc(docRef);
      // Instead of calling updateWallpapersState again, remove the deleted wallpaper from the state.
      // setWallpapers((prevWallpapers) =>
      //   prevWallpapers.filter((wallpaper) => wallpaper.id !== id)
      // );
    } catch (err) {
      console.log(err);
    }
  };

  const uploadPost = async (name, email, thumbnail) => {
    const storageRef = ref(
      storage,
      `upload/images/${Date.now()}-${thumbnail?.name}`
    );

    try {
      const filePath = await uploadBytes(storageRef, thumbnail);
      const imageUrl = await getImageUrl(filePath?.ref?.fullPath);
      const res = await addDoc(collection(db, "wallpapers"), {
        name,
        email,
        imageUrl,
      });
      if (res?.id) {
        await updateWallpaper(res?.id, {
          id: res?.id,
        });
      }
      fetchWallpapers();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWallpapers = async () => {
    try {
      const colRef = collection(db, "wallpapers");
      const querySnapshot = await getDocs(colRef);
      querySnapshot?.docs?.map((doc) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setWallpapers(newData);
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchWallpapers();
  // }, []);

  const value = {
    uploadPost,
    isLoading,
    wallpapers,
    deleteWallpaper,
    updateWallpaper,
    fetchWallpapers,
  };

  return (
    <WallpaperContext.Provider value={value}>
      {children}
    </WallpaperContext.Provider>
  );
};
