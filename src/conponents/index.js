import React, {useState } from "react";
import logo1 from  '../images/defarsci.png'
import {Formulaire} from './formulaire'


export const Header= props => {
    return(
        <header>
            <img src={logo1} className="App-logo" alt="logo Defarsci"/>
            <button className="btn btn-link login" data-toggle="modal" data-target="#modal"><i class="fa-solid fa-right-to-bracket"></i>  &nbsp;Connexion</button>
        </header>
    );
}
export const Modal = props => {
    return(
    <div 
      className="modal fade"
      id="modal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content forms">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* <Forms /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
  export const MessageForm = () => {
    return(
        <div className="container">
            <div className="row">
            <div className="col-10 offset-1">
                <h3 className="messageaccueil">Partagez facilement des idées, suggestions, commentaires, questions et demandes</h3>
                <button type="button" class="btn btn-primary offset-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Partager une idée
                </button>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <img src={logo1} className="logo" alt="logo Defarsci"/>
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Boîte à Idées</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Formulaire/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
                        {/* <button type="button" class="btn btn-primary">Understood</button> */}
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
    )
  }