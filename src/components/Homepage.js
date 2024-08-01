import '../styles/homepage.css'
import Taskcard from './Taskcard';

const Homepage = ({tasks,setTasks}) => {  

  //change the completed prop to its ! when button is clicked
  const handleCheck = (id) => {

    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  //gets called in Taskcard and edits an existing task
  const handleEdit = (id, title, description) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, title, description, lastUpdated: new Date().toISOString() } : task
    );
    const sortedTasks = updatedTasks.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
    setTasks(sortedTasks);
  };

  return (
    <div className='task-list'>
        {tasks && tasks.map(task => (
          <Taskcard key={task.id} handleCheck={handleCheck} handleEdit={handleEdit} task={task} />
        ))}
    </div>
  )
}

export default Homepage