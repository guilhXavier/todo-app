export interface ToDo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface useTodoReturn {
  add: (title: string) => void;
  toggle: (id: number) => void;
  toDos: Array<ToDo>;
}
