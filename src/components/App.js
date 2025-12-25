import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const[show, setShow] = useState(false);
  return (
    <div>
      <button onClick={()=>setShow(true)}>Show Modal</button>
       <Modal show={show} onClose={() => setShow(false)}>
        <p className="model-p">This is the content of the modal.</p>
      </Modal>
    </div>
  )
}

export default App