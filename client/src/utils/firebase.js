
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "fir-555f4.firebaseapp.com",
  projectId: "fir-555f4",
  storageBucket: "fir-555f4.firebasestorage.app",
  messagingSenderId: "379027518159",
  appId: "1:379027518159:web:eb423e04693de58d89fdba"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}