import React, { useState } from 'react'
import '../styles/addtask.css';

const AddTask = ({ handleAdd, closeAddTask }) => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
 
   //function for checking title and description field
   const onSubmit = () => {
     if (title && description) {
       handleAdd(title, description);
       closeAddTask();
       alert('task added successfully');
     } else {
      alert('title and description cannot be empty');
     }
   };
 
   return (
     <div className="add-task-bg">
       <div className="add-task-container">
         <h2>Add New Task</h2>
         <input 
           type="text" 
           placeholder="Title" 
           value={title} 
           onChange={(e) => setTitle(e.target.value)}
         />
         <textarea 
           placeholder="Description" 
           value={description} 
           onChange={(e) => setDescription(e.target.value)} 
         />
         <div className="buttons">
           <button onClick={onSubmit}>Create</button>
           <button onClick={closeAddTask}>Cancel</button>
         </div>
       </div>
     </div>
   );
 };
 
 export default AddTask;