import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


import { useState, useEffect } from 'react'


function App() {
  // Use state to add tasks w button
  const [showAddTasks, setShowAddTasks] = useState(false)

  const [tasks, setTasks] = useState([])

  // getting tasks from the localhost json db
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






  //promise to add task
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


  // promise to delete tasks
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',

    })
    // error checking
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')


  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTasks(!showAddTasks)} showAdd={showAddTasks} />
      {showAddTasks && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : <h4 className="paragraph">You have no tasks</h4>}
    </div>
    // onToggle={toggleReminder}
  );


}

export default App
