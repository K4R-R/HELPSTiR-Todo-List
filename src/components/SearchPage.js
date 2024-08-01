import '../styles/homepage.css'
import Taskcard from './Taskcard';
import { useParams } from 'react-router-dom';

const SearchPage = ({tasks,setTasks}) => {  

  const {keyword} = useParams();

  //similar to function in homepage.js
  const handleCheck = (id) => {

    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  //same function copied from homepage.js
  const handleEdit = (id, title, description) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, title, description, lastUpdated: new Date().toISOString() } : task
    );
    const sortedTasks = updatedTasks.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
    setTasks(sortedTasks);
  };

  //filtering tasks with the keyword in its title
  const filteredTasks = (tasks || []).filter(task => task.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div className='task-list'>
      <h2>Search Result for '{keyword}'</h2>
        {filteredTasks.map(task => (
          <Taskcard key={task.id} handleCheck={handleCheck} handleEdit={handleEdit} task={task} />
        ))}
    </div>
  )
}

export default SearchPage