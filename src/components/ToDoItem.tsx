import React from "react";
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import { ToDo } from "../types";

interface ToDoItemProps {
  toDo: ToDo;
  onChange: (id: number) => void;
}

export const ToDoItem: React.FC<ToDoItemProps> = ({ toDo, onChange }) => (
  <ListItem
    sx={{
      borderRadius: "8px",
      marginTop: 4,
      padding: 2,
      boxShadow: "2px 2px 2px grey",
    }}
    key={toDo.id}
    secondaryAction={<Checkbox edge="end" checked={toDo.isCompleted} />}
    onClick={() => {
      onChange(toDo.id);
    }}
  >
    <ListItemButton disabled={toDo.isCompleted}>
      <ListItemIcon>
        <TaskIcon />
      </ListItemIcon>
      <ListItemText sx={{ color: "black" }} primary={toDo.title} />
    </ListItemButton>
  </ListItem>
);
