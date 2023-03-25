import React, { useState } from "react";
import './Todo.css';

function ToDo(props){
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(props.task);

    function handleEditClick(){
        setIsEditing(!isEditing);
    }

    function handleClick(){
        props.removeTodo(props.id);
    }

    function handleUpdate(e){
       e.preventDefault(); 
       props.updateTodo(props.id,task);
       setIsEditing(false);
    }

    function handleChange(evt){
        setTask(evt.target.value);
    }

    function handleToggle(){
        props.toggleTodo(props.id);
    }

    let result;

    if(isEditing){
        result = 
        <div className="Todo-task">
            <form className="Todo-edit-form" onSubmit={handleUpdate}>
                <input type="text" value={task} name="task" onChange={handleChange}/>
                <button>Save</button>
            </form>
        </div>
    }else{
        result = 
        <div className="Todo-buttons">
            <button onClick={handleEditClick}><i class="fa fa-pen" /></button>
            <button onClick={handleClick}><i class="fa fa-trash" /></button>
            <li className={props.completed ? "Todo-task completed" : "Todo-task"} onClick={handleToggle}>{props.task}</li>
        </div>
    }
    return result;
}

export default ToDo;