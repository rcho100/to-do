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

  render () {
    const todos = this.state.todos.map(item => <TodoItem key={item.id} item={item}todo/>)
    return (
      <div className="todo-list">
        {todos}
      </div>
    )
  }
}

export default App;
