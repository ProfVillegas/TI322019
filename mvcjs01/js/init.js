class Model {
    constructor() {
            // The state of the model, an array of toDo objects, prepopulated with some data
            this.todos = [
                { id: 1, text: 'Run a marathon', complete: false },
                { id: 2, text: 'Plant a garden', complete: false },
            ]
        }
        //Add new elements toDo array
    addTodo(todoText) {
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false,
        }

        this.todos.push(todo)
    }

    // Map through all toDos, and replace the text of the todo with the specified id
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo
        )
    }

    // Filter a toDo out of the array by id
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    // Flip the complete boolean on the specified toDo
    toggleTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo
        )
    }
}

class View {
    constructor() {}
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
}

const app = new Controller(new Model(), new View())

app.model.addTodo("Take a brunch.")

console.log(app.model);