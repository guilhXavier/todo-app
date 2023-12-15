import React, { useState, ChangeEvent } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";

import { useTodoReturn } from "../types";

type EventHandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

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

  const handleClick = () => {
    if (title) {
      add(title);
      setTitle("");
    } else {
      toast.info("Dê um nome para sua tarefa primeiro :)", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { width: "355px" },
      });
    }
  };

  return (
    <Card
      sx={{
        padding: 4,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          padding: 0,
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <TextField
          label="Qual a próxima tarefa?"
          variant="outlined"
          value={title}
          onChange={(event) => {
            handleChange(event);
          }}
          sx={{ flex: 1 }}
        />
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ height: "50px" }}
          endIcon={<SendIcon />}
        >
          Adicionar
        </Button>
      </CardContent>
    </Card>
  );
};
