import React, {useState} from 'react'
import TodoForm from './TodoForm'
export default ({id, title, content, urgent, deleteTodo, updateTodo}) => {
    const [toggleEditForm, setToggleEditForm] = useState(false)

    const handleClick = (event) => {
        event.target.id === "edit" ? setToggleEditForm(true) : deleteTodo(id)
    }
    const showTodo = () => (
        <li className={urgent ? "todo-item urgent" : "todo-item"}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button className="delete" id="delete" onClick={handleClick}>DELETE</button>
            <button className="edit" id="edit" onClick={handleClick}>EDIT</button>
        </li>
    )
    const todo = {id, title, content, urgent}

    return(
        <>
            {toggleEditForm ? <TodoForm 
                                submitAction ={updateTodo}
                                closeForm={setToggleEditForm} 
                                {...todo} /> 
                            : showTodo()}
        </>
    )
}