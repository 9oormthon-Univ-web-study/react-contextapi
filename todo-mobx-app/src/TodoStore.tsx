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

    //nextId라는 변수를 인스턴스 변수로 선언해 객체가 생성될 때 초기화되고 각 객체의 고유한 상태가 됨
    private nextId = 0;
    addTodo(title: string) {
        const item = {
            id: this.nextId++,
            title,
            completed: false,
        };
        this.todos.push(item);
        return item;
    }

    // observable인 todos를 하나씩 순회하면서 completed인지 remaining인지 체크하며 반환
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

    // findIndex에서 값이 없으면 -1을 내보내주기 때문에 조건문에 들어가려면 리스트에 있는 id값이어야 함
    // 해당 id를 가진 값의 completed를 반전시켜줌
    /**
     *
     * @param id todo 리스트에서 선택한 항목의 id 값
     */
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
