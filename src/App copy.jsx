import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import NewCart_Objects from "./components/NewCart_Objects.jsx";
import NewCart_Arrays from "./components/NewCart_Arrays.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false); // array with 2 values, false is the default value

  // return <NewCart_Arrays />
  // return <NewCart_Objects />
  // return <Counter/>

  function onTodoDelete() {
    setShowModal(true);
    console.log("onTodoDelete()");
  }
  function cancelModal() {
    setShowModal((prevState) => !prevState);
    console.log("cancel");
  }
  function confirmModal() {
    
  }

  useEffect(() => {
    console.log('on mount')
  }, [])

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add To do</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish React Course"
          paragraph="Code along with Frontend Simplified step by step"
        />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish PPP"
          paragraph="Code along with Frontend Simplified step by step"
        />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Write an 10 Pages long Essay"
          paragraph="Code along with Frontend Simplified step by step"
        />
      </div>
      {showModal && (
        <Modal
          cancelForChild={cancelModal}
          confirmModalForChild={confirmModal}
          modalContent="Do you want to continue?"
        />
      )}
    </div>
  );
}

export default App;
