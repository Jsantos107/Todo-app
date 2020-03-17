import React, {useState} from 'react'
import TodoForm from './TodoForm'
export default ({id, title, content, urgent, deleteTodo}) => {
    const [toggleEditForm, setToggleEditForm] = useState(false)

    const handleClick = () => {
        deleteTodo(id)
    }
    const showTodo = () => (
        <li className={urgent ? "todo-item urgent" : "todo-item"}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button className="delete" onClick={handleClick}>DELETE</button>
        </li>
    )
    return(
        <>
        {showTodo()}
        </>
    )
}