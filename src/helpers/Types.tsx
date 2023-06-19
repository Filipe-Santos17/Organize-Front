export type jsonDataPattern = {
  listData: {
    columns: {
      name: string;
      tasks: {
        title: string;
        description: string;
        status: string;
        subtasks: {
          title: string,
          isCompleted: boolean,
        }[];
      }[];
    }[];
    name: string;
  }[];
  setModalTask?: React.Dispatch<React.SetStateAction<boolean>>,
};

export type itemContent = {
  description: string,
  status: string,
  subtasks: {
    title: string,
    isCompleted: boolean,
  }[],
  title: string,
}