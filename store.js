import { defineStore } from 'pinia'

import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        users: useStorage('users', ),
    }),
    getters: {
        getAllTodos() {
            return this.todos
        },
        todoEmpty() {
            return this.todos.length <= 0
        }
    },
    actions: {
        addTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }

    },
})