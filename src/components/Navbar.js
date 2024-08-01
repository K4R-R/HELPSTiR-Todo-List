import React, { useState } from 'react';
import '../styles/navbar.css';
import AddTask from './AddTask';
import { useNavigate } from 'react-router-dom';


const Navbar = ({tasks,setTasks}) => {

  const [darkmode, setDarkmode] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  //adds new task when called in Taskcard
  const handleAdd = (title,description) => {
    const newTaskData = { 
      id: tasks.length + 1, 
      title:title,
      description:description, 
      completed: false, 
      lastUpdated: new Date().toISOString() 
    };
    setTasks([newTaskData,...tasks]);
  }

  //navigates to /search/:keyword path
  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/search/${encodeURIComponent(keyword.trim())}`);
    }
    setKeyword('');
  }

  //set variable values for dark/light mode
  if(darkmode) {
    document.documentElement.style.setProperty('--bg-color', '#202020');
    document.documentElement.style.setProperty('--semibg-color', '#404040');
    document.documentElement.style.setProperty('--text-color', '#EEEEEE');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#ffffff');
    document.documentElement.style.setProperty('--semibg-color', '#eeeeee');
    document.documentElement.style.setProperty('--text-color', '#353535');
  }

  return (
    <>
    <div className="navbar">
      <h1 onClick={()=> navigate('/')}>TODO LIST</h1>
      <div className='searchbar'>
        <input 
          type='text' 
          value={keyword} 
          onChange={(e)=>setKeyword(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
          placeholder='Search Tasks...'/>
        <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className='btns'>
        <button onClick={()=>setShowAddTask(true)}>Add Task</button>
        <button className='modes' onClick={() => setDarkmode(!darkmode)}>{darkmode ? <i className="fa-solid fa-moon"></i>:<i className="fa-solid fa-sun"></i>}</button>
      </div>
    </div>
    {showAddTask && <AddTask handleAdd={handleAdd} closeAddTask={() => setShowAddTask(false)} />}
    </>
  )
}

export default Navbar