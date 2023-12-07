import React from "react";
import { ToDo } from "../types";
import { Card, CardContent, List } from "@mui/material";
import { ToDoItem } from "./ToDoItem";

interface ToDoListProps {
  toDos: Array<ToDo>;
  onChange: () => void;
}
export const ToDoList: React.FC<ToDoListProps> = ({ toDos, onChange }) => (
  <Card sx={{ width: 500 }}>
    <CardContent>
      <List>
        {toDos.map((elem) => (
          <ToDoItem toDo={elem} onChange={onChange} />
        ))}
      </List>
    </CardContent>
  </Card>
);
