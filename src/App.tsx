import logo from './assets/svgs/Logo.svg'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import { useState } from 'react'

export interface Task {
  id: string
  title: string
  isCompleted: boolean
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddTask =  (title: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      isCompleted: false
    }

    setTasks(prevState => [...prevState, newTask])
    console.log(tasks)
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks(prevState => prevState.filter(task => task.id !== taskId))
  }

  const handleCompleteTask = (taskId: string) => {
    setTasks(prevState => prevState.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    }))
  }

  const printTasks = () => {

  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="" />
      </header>
      <main className={styles.main}>
        <NewTask onAddTask={handleAddTask}/>
        <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask}/>
      </main>
    </div>
  )
}

export default App
