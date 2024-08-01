import Homepage from "./components/Homepage";
import SearchPage from "./components/SearchPage";
import Navbar from "./components/Navbar";
import taskdata from './data/tasks.json';
import { useEffect,useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [tasks, setTasks] = useState(null);

  //retrieving data from local storage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));

    //checking whether local storage has data
    if (savedTasks) {
      setTasks(savedTasks);
      console.log('local');
    } else {
      const sortedTasks = taskdata.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
      setTasks(sortedTasks);
      localStorage.setItem('tasks', JSON.stringify(sortedTasks));
      console.log('not local');
    }

  }, []);

  //updating the local storage whenever a new task is added or updated
  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <>
    <BrowserRouter>
      <Navbar tasks={tasks} setTasks={setTasks} />
      <Routes>
        <Route path="/" element={<Homepage tasks={tasks} setTasks={setTasks} />} />
        <Route path="/search/:keyword" element={<SearchPage tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
