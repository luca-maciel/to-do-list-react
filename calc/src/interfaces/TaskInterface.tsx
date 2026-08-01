type Priority = "Low" | "Mid" | "High";

type Category = | "Study" | "Work" | "Pessoal" | "Other";

interface SubTask{
    id: number;
    title: string;
    completed: boolean;
}

export default interface TaskInterface{
    id: number;
    title: string;
    description: string;
    completed: boolean;
    favorite:boolean;

    priority: Priority;
    category: Category;

    tags: string[];

    createdAt: Date;
    updatedAt: Date;
    dueDate: Date | null;
    completedAt: Date | null;

    subTasks: SubTask[];
}