export type Task = {
  id: string;
  title: string;
  description: string;
};

export type Category = {
  id: string;
  title: string;
  tasks: Task[];
};
