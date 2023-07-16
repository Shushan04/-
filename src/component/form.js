import React from "react";

const Form = ({input, setInput, todos, setTodos}) => {
   const onInputChange = (event) =>{
    setInput(event.target.value);
   };
   const onFormSubmit = (event) =>{
    event.prevenDefault();
   }
    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <input 
                 type="text"
                 placeholder="Todo Name..."  
                 className="task-input" 
                 value={input}
                 required
                 onChange={onInputChange}
                />
                <button className="add-button" type="submit">
                    Add
                </button>

            </form>
        </div>
    )
}

export default Form;