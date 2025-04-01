import styles from './NewTask.module.css'
import plusIcon from '../assets/svgs/plus.svg'
import { useState } from 'react'

interface NewTaskProps {
  onAddTask: (title: string) => void
}

export function NewTask({ onAddTask }: NewTaskProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value)
  }

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return
    onAddTask(newTaskTitle)
    setNewTaskTitle('')

  }

  return (
    <div className={styles.newTask}>
      <input type="text" value={newTaskTitle} placeholder="Adicione uma nova tarefa" onChange={handleInputChange}/>
      <button onClick={handleAddTask}>Add<img src={plusIcon} alt=""/></button>
    </div>
  )
}