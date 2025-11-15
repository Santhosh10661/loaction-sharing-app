import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDM1LfH_Bc0YlmKLOkOu68fxJHTwh5a2nw",
  authDomain: "live-location-770d7.firebaseapp.com",
  databaseURL: "https://live-location-770d7-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "live-location-770d7",
  storageBucket: "live-location-770d7.appspot.com",
  messagingSenderId: "254117588252",
  appId: "1:254117588252:web:82a8752cde7096c304ded9"
};

const app = initializeApp(firebaseConfig);

// Disable Analytics for Expo
app.analytics = () => null;

export const db = getDatabase(app);
