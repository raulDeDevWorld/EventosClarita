import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSIVTYYe4_r3msXFUhcvSXxpfOikYRZkk",
  authDomain: "eventos-clarita.firebaseapp.com",
  databaseURL: "https://eventos-clarita-default-rtdb.firebaseio.com",
  projectId: "eventos-clarita",
  storageBucket: "eventos-clarita.appspot.com",
  messagingSenderId: "624335656132",
  appId: "1:624335656132:web:19a0dc6ab0b61814db6591"
};
export const app = initializeApp(firebaseConfig);
