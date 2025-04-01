import styles from './NewTask.module.css'
import plusIcon from '../assets/svgs/plus.svg'

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>Add<img src={plusIcon} alt="" /></button>
    </div>
  )
}