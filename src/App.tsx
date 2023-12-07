import "./App.css";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

function App() {
  return (
    <>
      <ToDoForm />
      <ToDoList
        toDos={[
          { id: 1, title: "To Do", isCompleted: false },
          { id: 2, title: "To Do", isCompleted: false },
          { id: 3, title: "To Do", isCompleted: true },
        ]}
        onChange={() => {}}
      />
    </>
  );
}

export default App;
