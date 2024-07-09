// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFDZQiZrLNlqiLqbSUVt68BJuQEijG3co",
  authDomain: "myblog-ca30d.firebaseapp.com",
  projectId: "myblog-ca30d",
  storageBucket: "myblog-ca30d.appspot.com",
  messagingSenderId: "818516845771",
  appId: "1:818516845771:web:ff1bc70fe30b6163cce74e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export{
    fireDb, auth , storage
}