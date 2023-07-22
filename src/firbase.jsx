import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  VITE_MESSAGE_SENDER_ID: import.meta.env.VITE_STORAGE_BUCKET,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

//firebase services
export const firebaseFirestore = getFirestore(firebaseApp);
// export const analytics = getAna(firebaseApp);
export const storage = getStorage(firebaseApp);
export const firebaseTimestamp = firebaseFirestore.Timestamp;
