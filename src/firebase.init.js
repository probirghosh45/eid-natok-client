
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDghNbqpvCNi7DqJ37BgsqXrs80nYy99oM",
  authDomain: "eid-natok-43acf.firebaseapp.com",
  projectId: "eid-natok-43acf",
  storageBucket: "eid-natok-43acf.appspot.com",
  messagingSenderId: "780000735256",
  appId: "1:780000735256:web:8cb544a91650199ea3936d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
