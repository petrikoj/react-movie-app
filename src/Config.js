import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//

const KEYS = process.env.REACT_APP_KEYS;

export default KEYS;

// My web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC7dH49ehVUXknFb0mhYHZeG1mN9SHZ_gU",
  authDomain: "tmdb-firebase.firebaseapp.com",
  projectId: "tmdb-firebase",
  storageBucket: "tmdb-firebase.appspot.com",
  messagingSenderId: "358588783548",
  appId: "1:358588783548:web:25f1ac7ee200c77e5569b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
