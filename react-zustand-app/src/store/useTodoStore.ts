import { create } from 'zustand';

interface Todo {
    text: string;
    id: number;
    isCompleted: boolean;
}

interface TodoStore {
    todos: Todo[];
    isCompleted: boolean;
    addTodo: (todoText: string) => void;
    deleteTodo: (todoId: number) => void;
    completeTodo: (todoId: number) => void;
}

let id = 0;

const getId = () => {
    return id++;
};

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    isCompleted: false,
    addTodo: (todoText: string) =>
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    text: todoText,
                    id: getId(),
                    isCompleted: false,
                },
            ],
        })),

    deleteTodo: (todoId: number) =>
        set((state) => ({
            todos: state.todos.filter((todo: Todo) => todo.id !== todoId),
        })),

    completeTodo: (todoId: number) =>
        set((state) => ({
            todos: state.todos.map((todo: Todo) =>
                todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
            ),
        })),
}));
