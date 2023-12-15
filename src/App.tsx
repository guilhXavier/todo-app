import "./App.css";

import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { useToDo } from "./hooks/useToDo";

function App() {
  const { toDos, add, toggle } = useToDo();

  return (
    <div className="global-wrapper">
      <ToDoForm add={add} />
      <ToDoList toDos={toDos} onChange={toggle} />
    </div>
  );
}

export default App;
