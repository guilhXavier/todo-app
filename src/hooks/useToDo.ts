import React from "react";
import { ToDo } from "../types";

interface useTodoReturn {
  add: (title: string) => void;
  toggle: (id: number) => void;
  toDos: Array<ToDo>;
}

export const useToDo = (): useTodoReturn => {
  const [toDos, setToDos] = React.useState<Array<ToDo>>([]);
  const [latestId, setLatestId] = React.useState<number>(0);

  const add = (title: string): void => {
    const newToDo: ToDo = { id: latestId, title, isCompleted: false };

    setToDos([...toDos, newToDo]);
    setLatestId(latestId + 1);
  };

  const toggle = (id: number): void => {
    const toDo = toDos.find((elem) => elem.id === id);
    const filteredList = toDos.filter((elem) => elem.id !== id);

    if (toDo) {
      setToDos([...filteredList, toDo]);
    }
  };

  return { toDos, add, toggle };
};
