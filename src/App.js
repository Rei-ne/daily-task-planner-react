import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


import { useState, useEffect } from 'react'


function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)

  const [tasks, setTasks] = useState([])

  // getting tasks from the json db
  useEffect(() => {

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)

    }


    getTasks()


  }, [])


  // fetch tasks
  const fetchTasks = async () => {

    // response to await fetch promise from json db
    const res = await fetch('http://localhost:5000/tasks')

    const data = await res.json()

    console.log(data)
    return data

  }

  // fetch task

  const fetchTask = async (id) => {

    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data

  }




  //Add task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])

  }


  // Delete tasks
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',

    })
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')


  }


  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = {
      ...taskToToggle, reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',

        },
        body: JSON.stringify(updateTask)

      }
    )

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task)
    )
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTasks(!showAddTasks)} showAdd={showAddTasks} />
      {showAddTasks && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks'}
    </div>
  );
}

export default App
