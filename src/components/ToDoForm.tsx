import React from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// import { toast } from "react-toastify";
// import { returnToastifyConfig } from "../utils/ToDoForm";

import { useTodoReturn } from "../types";

interface ToDoFormProps {
  add: useTodoReturn["add"];
}

export const ToDoForm: React.FC<ToDoFormProps> = ({ add }) => {
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
          sx={{ flex: 1 }}
        />
        <Button
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
