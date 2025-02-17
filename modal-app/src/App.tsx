import { useState } from "react";
import Modal from "./Modal";

function App() {

  const [modalDisplay, setModalDisplay] = useState<string>("none");

  const showModal = () => {
    setModalDisplay("block");
  }
  
  return(
    <>
      <h1>My Modal Project</h1>
      <button className="show-modal-btn" onClick={showModal}>Click me</button>
      <Modal display={modalDisplay} setDisplay={setModalDisplay}/>
    </>
  );
}

export default App;