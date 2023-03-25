import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './NewTodoForm.css';

function NewTodoForm(props){
    const [task, setTask] = useState("");

    function handleChange(evt){
        setTask(evt.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        props.createTodo({task, id : uuid(), completed : false});
        setTask("");
    }

    return(
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="task">New Todo</label>
            <input type="text" 
            name="task" 
            id="task" 
            placeholder='New Todo' 
            value={task}
            onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;