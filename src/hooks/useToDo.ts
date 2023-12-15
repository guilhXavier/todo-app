import React from "react";
import { ToDo, useTodoReturn } from "../types";

export const useToDo = (): useTodoReturn => {
  const [toDos, setToDos] = React.useState<Array<ToDo>>([]);
  const [latestId, setLatestId] = React.useState<number>(0);

  const add = (title: string): void => {
    const newToDo: ToDo = { id: latestId, title, isCompleted: false };

    setToDos([...toDos, newToDo]);
    setLatestId(latestId + 1);
  };

  const toggle = (id: number): void => {
    const toDo = toDos.find((element) => element.id === id);

    if (toDo) {
      const filteredList = toDos.map((element) => {
        if (element.id === toDo.id) {
          element.isCompleted = !element.isCompleted;
          return element;
        }
        return element;
      });

      setToDos(filteredList);
    }
  };

  return { toDos, add, toggle };
};
