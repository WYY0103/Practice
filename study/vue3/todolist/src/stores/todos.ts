import { defineStore } from 'pinia'
// todo的属性 
// 唯一标识（id） 代办的描述（title） 状态statue（进行中false|已完成true）

// 定义代办的接口
interface ITodo {
    readonly id: number;
    title: string;
    status: boolean
}

export enum TodoCate {
    All = 'ALL',
    Active = 'ACTIVE',
    Completed = 'COMPLETED'
}

export const useTodoStore = defineStore({
    id: 'todos',
    state: () => ({
        type: TodoCate.All,
        todos: [
            {
                id: 1,
                title: '吃饭',
                status: true
            },
            {
                id: 2,
                title: '睡觉',
                status: false
            }
        ] as ITodo[],

    }),
    getters: {
        ativeTodos(): ITodo[] {
            return this.todos.filter((todo: ITodo) => todo.status == false);
        },
        completedTodos(): ITodo[] {
            return this.todos.filter((todo: ITodo) => todo.status == true);
        },
        activeTodosCount(): number {
            return this.ativeTodos.length;
        },
        filterTodos(): ITodo[] {
            let ret: ITodo[];
            if (this.type == TodoCate.Active) {
                ret = this.ativeTodos;
            } else if (this.type == TodoCate.Completed) {
                ret = this.completedTodos;
            } else {
                ret = this.todos;
            }
            return ret;
        },
        isAllCompleted(): boolean {
            return this.todos.length > 0 && this.todos.length === this.completedTodos.length;
        }
    },
    actions: {
        setType(type: TodoCate) {
            this.type = type;
        },
        addTodo(title: string): boolean {
            let newTodo: ITodo = {
                id: Date.now(),
                title,
                status: false
            };
            this.todos.push(newTodo);
            return true;
        },
        deleteTodo(id: number): boolean {
            let newTodos: ITodo[] = this.todos.filter((todo: ITodo) => todo.id != id);
            this.todos = newTodos;
            return true;
        },
        deleteCompleted(): void {
            let newTodo: ITodo[] = this.todos.filter((todo: ITodo) => todo.status == false);
            this.todos = newTodo;
        },
        toggleAllTodos(status: boolean) {
            this.todos.forEach((todo: ITodo) => todo.status = status);
        },
    }
})