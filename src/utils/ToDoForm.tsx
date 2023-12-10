import { ToDo } from "../types";

const MAX_NUMBER_INTO_RANGE = 1000;
const MIN_NUMBER_INTO_RANGE = 1;

type ReturnId<T> = T extends { id: infer U } ? U : never;

export const generateRandomToDoId = (): ReturnId<ToDo> => {
  const randomlyGeneratedId = Math.floor(
    Math.random() * MAX_NUMBER_INTO_RANGE + MIN_NUMBER_INTO_RANGE
  );

  return randomlyGeneratedId;
};
