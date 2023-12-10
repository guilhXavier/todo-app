import "./App.css";

import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { useToDo } from "./hooks/useToDo";

function App() {
  const { toDos } = useToDo();

  return (
    <>
      <ToDoForm />
      <ToDoList toDos={toDos} onChange={() => {}} />
    </>
  );
}

export default App;
