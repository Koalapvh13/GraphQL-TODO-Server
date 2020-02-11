const Todo = require("../models/Todo")

module.exports = {
    Query: {
        async getTodos() {
            try {
                const todos = await Todo.find({})
                return todos;
            } catch (error) {
                throw new Error(err)
            }
        }
    },

    Mutation: {
        async createTodo(_, { body }) {
            try {
                const newTodo = new Todo({
                    body,
                    created: new Date().toISOString()
                })

                const todo = await newTodo.save()
                return todo
            } catch (error) {
                throw new Error(err)
            }
        },

        async deleteTodo(_, { todoId }) {
            try {
                const todo = await Todo.findById(todoId)
                if (todo) {
                    await todo.delete()
                    return 'Todo deleted!'
                } else {
                    return 'Todo does not exist'
                }
            } catch (error) {
                throw new Error(err)
            }
        }
    }
}