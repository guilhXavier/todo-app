import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Card, CardContent, TextField } from "@mui/material";
import { useTodoReturn } from "../types";

type EventHandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type EventHandleChangeKeyDown = KeyboardEvent<HTMLInputElement>;

interface ToDoFormProps {
  add: useTodoReturn["add"];
}

export const ToDoForm: React.FC<ToDoFormProps> = ({ add }) => {
  const [title, setTitle] = useState<string>("");

  // --> Função responsável por capturar o evento de escrever/digitar no input e salvar no estado.
  const handleChange = (event: EventHandleChange) => {
    const titleTyped = event.target.value;
    setTitle(titleTyped);
  };

  // --> Função responsável por criar um novo To-Do. Acionada quando a tecla "Enter" é pressionada.
  const handleKeyDown = (event: EventHandleChangeKeyDown) => {
    if (event.key === "Enter" && title.length > 0) {
      add(title);
      setTitle("");
    }
  };

  return (
    <Card sx={{ marginBottom: 16 }} onKeyDown={handleKeyDown}>
      <CardContent>
        <TextField
          sx={{ width: "100%" }}
          label="Qual a próxima tarefa?"
          variant="outlined"
          value={title}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </CardContent>
    </Card>
  );
};
