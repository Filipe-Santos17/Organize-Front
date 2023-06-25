export type jsonDataPattern = {
  boards: {
    name: string;
    columns: {
      name: string;
      tasks: {
        title: string;
        description: string;
        subtasks: {
          title: string,
          isCompleted: boolean,
        }[];
      }[];
    }[];
  }[];
  setModalTask?: React.Dispatch<React.SetStateAction<boolean>>,
  setNewBoard?: React.Dispatch<React.SetStateAction<boolean>>,
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

export type InputBoxType = {
  labelName: string,
  idName: string,
  typeInput: "text" | "number" | "password",
  value: string,
  onchange: () => void,
  placeholderText?: string,
  error: string,
  onBlur: () => void,
  validate?: () => void,
  setValue?: React.Dispatch<React.SetStateAction<string>>
}

export type dataFetchToken = {
  createdAt: string,
  email: string,
  id: number,
  name: string,
  updatedAt: string,
}