import React from "react"

function TodoItem({item}) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={item.completed}
                onChange={console.log('changed')}
            />
            <p>{item.text}</p>
        </div>
    )
}

export default TodoItem