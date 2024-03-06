import './config'
import "firebase/firestore";
import db from "./config";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

const collections = {
    messages: "messages"
}
// write
export const write = (item) => {
    debugger;
    setDoc(doc(db, collections.messages, item.ideaTitle), {item})
        .then(() => {
            console.log("Idée écrit avec succès !");

        })
        .catch((error) => {
            console.error("Erreur lors de l'écriture : ", error);
        });
}