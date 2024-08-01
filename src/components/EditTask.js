import React, { useState } from 'react'
import '../styles/edittask.css';

const EditTask = ({task,handleEdit,closeEditTask}) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    //same checking done in add task
    const onSubmit = (id) => {
      if (title && description) {
        handleEdit(id,title, description);
        closeEditTask();
        alert('task updated successfully');
      } else {
        alert('title and description cannot be empty');
      }
    };
  
    return (
      <div className="edit-task-bg">
        <div className="edit-task-container">
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
            <button onClick={()=>onSubmit(task.id)}>Update</button>
            <button onClick={closeEditTask}>Cancel</button>
          </div>
        </div>
      </div>
    );
}

export default EditTask