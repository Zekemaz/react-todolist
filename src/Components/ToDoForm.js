/**
 * 
 * Install material ui via 
    * $ npm install @material-ui/core
    * $ npm install @material-ui/icons
    * $ npm install @material-ui/styles

 * 
 * Import React && useState Hook
 * Import TextField from material ui
 * Create Form
 * Add onChange, onSubmit props to Form
 * Import this component in your App.js.
 *
 * Clear input in ToDoForm.js.
 * Once a todo’s saved, set the form state to an empty string.
 *
 */

import React, { useState } from 'react';
// import TextField from '@material-ui/core/TextField'

const ToDoForm = ({saveTodo}) => {

    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        saveTodo(value);
        setValue('');
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const textFieldProps = {
        autoFocus: true,
        maxLength: 50,
        
    }
      
    return(
        <form className="todo-form" onSubmit={onSubmit}>
            <input
             value={value} onChange={onChange} variant="outlined" 
             placeholder="Need to do something?" autoFocus={true} maxLength={50} color="secondary"/>
        </form>
    )
}

export default ToDoForm


