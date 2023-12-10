import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Card, CardContent, TextField } from "@mui/material";
import { useToDo } from "../hooks/useToDo";

type EventHandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type EventHandleChangeKeyDown = KeyboardEvent<HTMLInputElement>;

export const ToDoForm: React.FC = () => {
  const { add } = useToDo();
  const [title, setTitle] = useState<string>("");

  // --> Função responsável por capturar o evento de escrever/digitar no input e salvar no estado.
  const handleChange = (event: EventHandleChange) => {
    const titleTyped = event.target.value;
    setTitle(titleTyped);
  };

  // --> Função responsável por criar um novo ToDo. Acionada quando a tecla "Enter" é pressionada.
  const handleKeyDown = (event: EventHandleChangeKeyDown) => {
    if (event.key === "Enter") {
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
