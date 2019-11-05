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
        this.onTodoListChanged(this.todos)

    }

    // Map through all toDos, and replace the text of the todo with the specified id
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo
        )
        this.onTodoListChanged(this.todos)


    }

    // Filter a toDo out of the array by id
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)

        //
        this.onTodoListChanged(this.todos)
    }



    // Flip the complete boolean on the specified toDo
    toggleTodo(id) {
        this.todos = this.todos.map(todo =>
                todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo
            )
            //
        this.onTodoListChanged(this.todos)
    }

    //
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }
}

class View {
    constructor() { // The root element
        this.app = this.getElement('#root')

        // The title of the app
        this.title = this.createElement('h1')
        this.title.textContent = 'Todos'

        // The form, with a [type="text"] input, and a submit button
        this.form = this.createElement('form')

        this.input = this.createElement('input')
        this.input.type = 'text'
        this.input.placeholder = 'Add todo'
        this.input.name = 'todo'

        this.submitButton = this.createElement('button')
        this.submitButton.textContent = 'Submit'

        // The visual representation of the todo list
        this.todoList = this.createElement('ul', 'todo-list')

        // Append the input and submit button to the form
        this.form.append(this.input, this.submitButton)

        // Append the title, form, and todo list to the app
        this.app.append(this.title, this.form, this.todoList)

        this._temporaryTodoText
        this._initLocalListeners()
    }

    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    displayTodos(todos) {
            // Delete all nodes
            while (this.todoList.firstChild) {
                this.todoList.removeChild(this.todoList.firstChild)
            }

            // Show default message
            if (todos.length === 0) {
                const p = this.createElement('p')
                p.textContent = 'Nothing to do! Add a task?'
                this.todoList.append(p)
            } else {
                // Create todo item nodes for each todo in state
                todos.forEach(todo => {
                    const li = this.createElement('li')
                    li.id = todo.id

                    // Each todo item will have a checkbox you can toggle
                    const checkbox = this.createElement('input')
                    checkbox.type = 'checkbox'
                    checkbox.checked = todo.complete

                    // The todo item text will be in a contenteditable span
                    const span = this.createElement('span')
                    span.contentEditable = true
                    span.classList.add('editable')

                    // If the todo is complete, it will have a strikethrough
                    if (todo.complete) {
                        const strike = this.createElement('s')
                        strike.textContent = todo.text
                        span.append(strike)
                    } else {
                        // Otherwise just display the text
                        span.textContent = todo.text
                    }

                    // The todos will also have a delete button
                    const deleteButton = this.createElement('button', 'delete')
                    deleteButton.textContent = 'Delete'
                    li.append(checkbox, span, deleteButton)

                    // Append nodes to the todo list
                    this.todoList.append(li)
                })
            }
        }
        /** **/
    get _todoText() {
        return this.input.value
    }

    _resetInput() {
        this.input.value = ''
    }
    bindAddTodo(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault()

            if (this._todoText) {
                handler(this._todoText)
                this._resetInput()
            }
        })
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id)

                handler(id)
            }
        })
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id)

                handler(id)
            }
        })
    }

    //Update
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }

    //Edit todo
    // Update temporary state
    _initLocalListeners() {
        this.todoList.addEventListener('input', event => {
            if (event.target.className === 'editable') {
                this._temporaryTodoText = event.target.innerText
            }
        })
    }

    // Send the completed value to the model
    bindEditTodo(handler) {
        this.todoList.addEventListener('focusout', event => {
            if (this._temporaryTodoText) {
                const id = parseInt(event.target.parentElement.id)

                handler(id, this._temporaryTodoText)
                this._temporaryTodoText = ''
            }
        })
    }
}

class Controller {
    constructor(model, view) {
            this.model = model
            this.view = view
                // Display initial todos
            this.onTodoListChanged(this.model.todos)
                //
            this.view.bindAddTodo(this.handleAddTodo)
            this.view.bindDeleteTodo(this.handleDeleteTodo)
            this.view.bindToggleTodo(this.handleToggleTodo)
                //this.view.bindEditTodo(this.handleEditTodo) //- We 'll do this one last
                ///
            this.model.bindTodoListChanged(this.onTodoListChanged)

        } //constructor

    onTodoListChanged = todos => { //onTodoListChanged(todos) {
        this.view.displayTodos(todos)
    }
    handleAddTodo = todoText => {
        this.model.addTodo(todoText)
    }

    handleEditTodo = (id, todoText) => {
        this.model.editTodo(id, todoText)
    }

    handleDeleteTodo = id => {
        this.model.deleteTodo(id)
    }

    handleToggleTodo = id => {
        this.model.toggleTodo(id)
    }

}

const app = new Controller(new Model(), new View())