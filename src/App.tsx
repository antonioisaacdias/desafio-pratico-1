import logo from './assets/svgs/Logo.svg'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'

function App() {


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="" />
      </header>
      <main className={styles.main}>
        <NewTask />
        <Tasks />
      </main>
    </div>
  )
}

export default App
