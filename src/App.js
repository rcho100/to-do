import React from "react"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  render () {
    return (
      <div className="todo-list">

      </div>
    )
  }
}

export default App;
