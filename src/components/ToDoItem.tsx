import React from "react";
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { ToDo } from "../types";

interface ToDoItemProps {
  toDo: ToDo;
  onChange: (id: number) => void;
}

export const ToDoItem: React.FC<ToDoItemProps> = ({ toDo, onChange }) => (
  <ListItem
    key={toDo.id}
    secondaryAction={<Checkbox edge="end" checked={toDo.isCompleted} />}
    onClick={() => {
      onChange(toDo.id);
    }}
  >
    <ListItemButton disabled={toDo.isCompleted}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText sx={{ color: "black" }} primary={toDo.title} />
    </ListItemButton>
  </ListItem>
);
