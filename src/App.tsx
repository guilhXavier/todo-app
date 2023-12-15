import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
// import { useToDo } from "./hooks/useToDo";

function App() {
  //const { toDos, add, toggle } = useToDo();

  return (
    <>
      <div className="global-wrapper">
        <ToDoForm add={() => {}} />
        <ToDoList
          toDos={[
            { id: 0, title: "Estudar Java e OOP", isCompleted: true },
            { id: 1, title: "Assitir à aula do professor", isCompleted: false },
            { id: 2, title: "Levar o cachorro ao parque", isCompleted: false },
          ]}
          onChange={() => {}}
        />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
