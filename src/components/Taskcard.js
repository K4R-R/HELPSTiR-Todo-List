import React, { useState } from 'react'
import {format} from 'date-fns';
import EditTask from './EditTask';

const Taskcard = ({task,handleCheck,handleEdit}) => {

   const [expand, setExpand] = useState(false);
   const [showEditTask, setShowEditTask] = useState(false);

   return (
      <>
      <div className='task-card' key={task.id}>
         <button onClick={()=>handleCheck(task.id)}> {task.completed ? <i className="fa-solid fa-check"></i>: <></> } </button>
         <div className={task.completed ? 'checked':''}> {task.title} </div>
         <button className='expand-btn' onClick={()=>setExpand(!expand)}>{expand ? <i className="fa fa-times"></i>:<i className="fa fa-navicon"></i>}</button>
      </div>
      <div className={expand ? 'task-details expand':'task-details'}>
         <div className={task.completed ? 'checked':''}>{task.description} </div>
         <div className={task.completed ? 'checked date':'date'}>Last Updated : {format(new Date(task.lastUpdated), 'MMMM dd, yyyy')}</div>
         <button className='edit-task' onClick={()=>setShowEditTask(true)}>Edit</button>
      </div>
      {showEditTask && <EditTask task={task} handleEdit={handleEdit} closeEditTask={() => setShowEditTask(false)} />}
      </>
   )
}

export default Taskcard