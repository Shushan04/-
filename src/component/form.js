// import React from "react";

// const Form = ({ input, setInput, todos, setTodos }) => {
//   const onInputChange = (event) => {
//     setInput(event.target.value);
//   };

//   const onFormSubmit = (event) => {
//     event.preventDefault();
//     setTodos([...todos, { title: input, completed: false }]);
//     setInput('');
//   };

//   return (
//     <div>
//       <form onSubmit={onFormSubmit}>
//         <input
//           type="text"
//           placeholder="Todo Name..."
//           className="task-input"
//           value={input}
//           required
//           onChange={onInputChange}
//         />
//         <button className="add-button" type="submit">
//           Add
//         </button>
//         <input
//          type="text"
//          placeholder="Search Name..."
//          className="task-input"
//         />
//         <button className="search-button" type="button">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;


import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { title: input, completed: false }]);
    setInput('');
  };

  return (
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
        <input
         type="text"
         placeholder="Search Name..."
         className="task-input"
        />
        <button className="search-button" type="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;


