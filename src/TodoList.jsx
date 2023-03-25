import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm.jsx';
import ToDo from './ToDo.jsx';
import './TodoList.css';

function TodoList(){
    const [todos, setTodos] = useState([]);
    
    let todo = todos.map(todo => <ToDo key={todo.id} 
        id={todo.id} 
        task={todo.task} 
        removeTodo={remove} 
        updateTodo={update}
        toggleTodo={toggleCompletion}
        completed={todo.completed}
    />);

    function create(newTodo){
        setTodos(prevVal =>  
          {  return [...prevVal,newTodo];
        });
    }

    function remove(id){
        setTodos(() => {
            return todos.filter(todo => todo.id !== id);
        }); 
    }

    function update(id, updatedTask){
        const updatedTodos = todos.map(todo => {
            if(todo.id === id){
                 return {...todo,task : updatedTask}
            }else{
                return todo;
            } 
        });  
        
        setTodos(updatedTodos);
    }

    function toggleCompletion(id,updatedTask){
        const updatedTodos = todos.map(todo => {
            if(todo.id === id){
                 return {...todo,completed : !todo.completed}
            }else{
                return todo;
            } 
        });  
        
        setTodos(updatedTodos);
    }

   
    return (
        <div className="TodoList">
            <h1>Todo List !<span>A simple React Todo App</span></h1>
            <ul>
                {todo}
            </ul>
            <NewTodoForm createTodo={create}/>
        </div>   
    );
}

export default TodoList;