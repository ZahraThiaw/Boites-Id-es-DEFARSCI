import React, {useState } from "react";
import { Header, MessageForm, Modal } from "./conponents";
import './App.css';


const App = ()  => {
  return (
    <div className='App'>
      <Header/>
      <MessageForm/>
      <Modal/>
    </div>
   

  );
}

export default App;
