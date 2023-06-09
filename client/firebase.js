import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8Z0Jr76iwZJMCYbNzyUdE00KlupOXQto",
  authDomain: "loginnext-2463c.firebaseapp.com",
  projectId: "loginnext-2463c",
  storageBucket: "loginnext-2463c.appspot.com",
  messagingSenderId: "630604343601",
  appId: "1:630604343601:web:42abf5ded0213093b62810",
  measurementId: "G-N78KWN9J4Z",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
