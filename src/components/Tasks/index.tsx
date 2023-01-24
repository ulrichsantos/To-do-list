import { typeTask } from '../../App'
import { Task } from '../Task'

import styles from './tasks.module.css'

import clipBoard from '../../assets/Clipboard.svg'

interface Props {
  tasks: typeTask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksLength = tasks.length;
  const tasksComplted = tasks.filter((task) => task.isCompleted).length
  
  return (
    <section className={styles.container}>
      <header className={styles.board}>
        <div className={styles.titles}>
          <div className={styles.title1}>
            <p className={styles.itemTitle}>Tarefas criadas</p>
            <p className={styles.itemNumber}>{tasksLength}</p>
          </div>
          <div className={styles.title2}>
            <p className={styles.itemTitle2}>Concluidas</p>
            <p className={styles.itemNumber}>{tasksComplted} de {tasksLength}</p>
          </div>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task 
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <img src={clipBoard} />
            <div>
              <p className={styles.emptyText}>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}
