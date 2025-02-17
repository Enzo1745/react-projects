import { useEffect } from "react";

interface ModalInterface {
    display: string;
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const Modal = ({display, setDisplay}: ModalInterface) => {

    const hideModal = () => {
        setDisplay("none");
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
            setDisplay("none");
          }
        };
      
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
      }, [setDisplay]);

    return(
        <>
            <div className="modal" style={{display: display}}>
                <h3>My modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi, est aperiam iure id dolor architecto eos beatae similique aut obcaecati corrupti! Quasi, itaque placeat. Dicta vitae distinctio voluptatum dolorum.</p>
                <button className="confirm-btn" onClick={hideModal}>Ok</button>
            </div>
        </>
    );
}

export default Modal;