import React, {useState } from "react";
import '../App.css';
import {write} from "../api/Database"

export const Formulaire = () => {
    const [message, setMessage] = useState(
        {
            ideaTitle: `` , ideaDescription: ``
        }
    );

    let name, value

    const data =(e) => {
        name= e.target.name;
        value= e.target.value;
        setMessage({...message, [name]: value})
    }

    const handleSubmit = (e) => {
         e.preventDefault ();
    }; 
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label for="ideaTitle">Titre de l'idée :</label>
            <input type="text" id="ideaTitle" name="ideaTitle" value={message.ideaTitle} onChange ={data} required /> 

            <label for="ideaDescription">Description de l'idée :</label>
            <textarea id="ideaDescription" name="ideaDescription" rows="4" value={message.ideaDescription} onChange ={data}  required></textarea>

            <button type="submit" onClick={() => {write(message) }}>Soumettre l'idée</button>
        </form>
    );
}

    