import React from "react";
import { Card, CardContent, TextField } from "@mui/material";

export const ToDoForm: React.FC = () => (
  <Card sx={{ marginBottom: 16 }}>
    <CardContent>
      <TextField
        sx={{ width: "100%" }}
        label="Qual a próxima tarefa?"
        variant="outlined"
      />
    </CardContent>
  </Card>
);
