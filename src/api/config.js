import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_aBelPJ6PXPvREsgKrNa9F76MUuCNpI4",
  authDomain: "baid-defarsci.firebaseapp.com",
  projectId: "baid-defarsci",
  storageBucket: "baid-defarsci.appspot.com",
  messagingSenderId: "419175836926",
  appId: "1:419175836926:web:58c0996f5848906a9849af"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;