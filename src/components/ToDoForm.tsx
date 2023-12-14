import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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

  const handleClick = () => {
    if (title) {
      add(title);
      setTitle("");
    }
  };

  return (
    <Card
      sx={{ padding: 4, width: "100%", border: "2px solid blue" }}
      onKeyDown={handleKeyDown}
    >
      <CardContent
        sx={{
          width: "100%",
          border: "2px solid green",
          display: "flex",
          padding: 0,
        }}
      >
        <TextField
          label="Qual a próxima tarefa?"
          variant="outlined"
          value={title}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <Button
          onClick={handleClick}
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
        >
          Adicionar
        </Button>
      </CardContent>
    </Card>
  );
};
