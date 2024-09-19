import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

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

export const useTodoStore = create<TodoStore>()(
    persist(
        (set) => ({
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
        }), // 그냥 하면 로컬스토리지에 저장인데 storage에 옵션 추가해주어서 세션스토리지에도 저장 가능
        { name: 'todo_storage', storage: createJSONStorage(() => sessionStorage) }
    )
);
