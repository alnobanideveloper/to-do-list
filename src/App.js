// import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React from 'react';
import { BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
import { useState ,useEffect } from "react"



const App = () => {
    const [showAddTask , setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

  useEffect( ()=> {
    const getTasks = async() =>{
      const tasks = await fetchTasks();
      
      setTasks(tasks);
    }
    getTasks()
  } , [])

  const fetchTasks = async()=> {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }  
  
  const fetchTask = async(id)=> {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const task = await res.json()

    return task
  }

    const toggleAdd = ()=>{
      setShowAddTask(!showAddTask)
    } 
  
    const deleteTask = async (id)=>{
      await fetch(`http://localhost:5000/tasks/${id}`,
        {
          method:'DELETE',
        }
      )
      setTasks(tasks.filter((task)=> task.id !== id ))
    }

    const addTask = async (task) =>{
      const data = await fetch(`http://localhost:5000/tasks/`, {
        method:'POST',
        headers:{
          'Content-type':'application/json'
      },
      body:JSON.stringify(task)//covert javascript object to json object
      }
    )
      const newTask =await data.json()//returns the new added task
      setTasks([...tasks , newTask])
    } 
    
    //toggle reminder
    const toggleReminder = async(id) =>{
    let updateTask = await fetchTask(id);
    const updTask = {...updateTask , reminder:!updateTask.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify(updTask)
    })

    const task = await res.json()

  
    let updatedTasks = []
    tasks.forEach(task => {
        if(task.id === id)
            task.reminder = !task.reminder

        updatedTasks.push(task)
    })

    setTasks(updatedTasks)
    }

  
    return (
      <Router>
        <div className='container'>
          <Header title='Tasks' addTask={addTask} onAdd={toggleAdd} showAdd={showAddTask} />
  
          <Routes>
            <Route
              path='/'
              element={
                <>
                  {showAddTask && <AddTask addTask={addTask} />}
                  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                </>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
  
          <Footer />
        </div>
      </Router>
    );
  };
export default App;
