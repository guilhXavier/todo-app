import React from "react";
import { Card, CardContent, List } from "@mui/material";
import { ToDoItem } from "./ToDoItem";
import { ToDo } from "../types";

interface ToDoListProps {
  toDos: Array<ToDo>;
  onChange: (id: number) => void;
}
export const ToDoList: React.FC<ToDoListProps> = ({ toDos, onChange }) => {
  return (
    <Card sx={{ width: "100%", marginTop: "8%" }}>
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
