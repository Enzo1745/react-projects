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
      
      {modalDisplay === "block" && (
      <div className="modal-overlay">
        <Modal display={modalDisplay} setDisplay={setModalDisplay} />
      </div>
    )}
    </>
  );
}

export default App;