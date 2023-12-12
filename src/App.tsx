import "./App.css";

import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { useToDo } from "./hooks/useToDo";

function App() {
  const { toDos, add, toggle } = useToDo();

  return (
    <>
      <ToDoForm add={add} />
      <ToDoList toDos={toDos} onChange={toggle} />
    </>
  );
}

export default App;
