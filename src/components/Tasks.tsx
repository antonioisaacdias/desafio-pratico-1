import styles from './Tasks.module.css';

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
    </div>
  );
}