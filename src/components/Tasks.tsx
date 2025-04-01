import styles from './Tasks.module.css';
import clipboardICon from '../assets/svgs/Clipboard.svg'
import { Task } from '../App';

interface TaskListProps {
    tasks: Task[]
    onDeleteTask: (taskId: string) => void
    onCompleteTask: (taskId: string) => void
}


export function Tasks({tasks, onDeleteTask, onCompleteTask}: TaskListProps) { 

    return (
        <div className={styles.tasks}>
            <header className={styles.info}>
                <span className={styles.createdTasks}>
                    Tarefas criadas
                    <span>0</span>
                </span>
                <span className={styles.completedTasks}>
                    Concluídas
                    <span>0</span>
                </span>
            </header>
            {tasks.length === 0 ? (
                <div className={styles.empty}>
                    <img src={clipboardICon} alt="Clipboard" />
                    <p>
                        <span>Você ainda não tem tarefas cadastradas</span>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            ) : ( 
                <div>
                    <ul>
                        {tasks.map(task =>(
                            <li key={task.id} className={styles.task}>
                                <span className={styles.checkboxWrapper}>
                                    <span></span>
                                    <input type="checkbox" onClick={() => onCompleteTask(task.id)}/>
                                </span>
                                <p>{task.title}</p>
                                <button onClick={() => onDeleteTask(task.id)}></button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}            
        </div>
    );
}