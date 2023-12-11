import React, { useEffect } from "react";
import { Card, CardContent, List } from "@mui/material";
import { ToDoItem } from "./ToDoItem";
import { ToDo } from "../types";

interface ToDoListProps {
  toDos: Array<ToDo>;
  onChange: () => void;
}
export const ToDoList: React.FC<ToDoListProps> = ({ toDos, onChange }) => {
  useEffect(() => {
    console.log({ toDosABX: toDos });
  }, [toDos]);

  return (
    <Card sx={{ width: 500 }}>
      {toDos?.length > 0 ? (
        <CardContent>
          <List>
            {toDos.map((elem) => (
              <ToDoItem toDo={elem} onChange={onChange} />
            ))}
          </List>
        </CardContent>
      ) : (
        <></>
      )}
    </Card>
  );
};
