import styles from './Tasks.module.css';
import clipboardICon from '../assets/svgs/Clipboard.svg'

export function Tasks() { 
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
        <body>
            <div className={styles.empty}>
                <img src={clipboardICon} alt="Clipboard" />
                <p>
                    <span>Você ainda não tem tarefas cadastradas</span>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </body>
    </div>
  );
}