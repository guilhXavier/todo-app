import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { useToDo } from "./hooks/useToDo";
import { ToastContainer } from "react-toastify";

function App() {
  const { toDos, add, toggle } = useToDo();

  return (
    <>
      <div className="global-wrapper">
        <ToDoForm add={add} />
        <ToDoList toDos={toDos} onChange={toggle} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
