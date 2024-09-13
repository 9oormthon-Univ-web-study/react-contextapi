import { action, computed, makeObservable, observable } from 'mobx';

interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

export default class TodoStore {
    todos: TodoItem[] = [];
    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            toggleTodo: action,
            status: computed,
        });
    }
    addTodo(title: string) {
        const item: TodoItem = {
            id: getId(),
            title,
            completed: false,
        };
        this.todos.push(item);
    }
    removeTodo() {}
    get status() {
        let completed = 0,
            remaining = 0;
        this.todos.forEach((todo) => {
            if (todo.completed) {
                completed++;
            } else {
                remaining++;
            }
        });
        return { completed, remaining };
    }

    toggleTodo(id: number) {
        const index = this.todos.findIndex((item) => item.id === id);
        if (index > -1) {
            this.todos[index].completed = !this.todos[index].completed;
        }
    }
}

// 바깥에서 설정된 id변수가 getId 내부에서 유지되는 이유
// js의 "클로저"
// 함수가 선언될 때의 스코프를 참조를 유지하여 해당 스코프에 있는 변수에 접근할 수 있음
let id = 0; // id를 store로 관리하지 않는 이유는 id가 todo에 직접적인 영향을 끼치지 않기 때문인 것 같음
function getId() {
    return id++;
}
