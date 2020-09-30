import React from "react"
import todosData from "./todosData"
import TodoItem from "./TodoItem"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render () {
    const todos = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {todos}
      </div>
    )
  }
}

export default App;
