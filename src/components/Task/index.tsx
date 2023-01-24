import styles from './task.module.css';

import trash from '../../assets/trash.svg'
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { typeTask } from '../../App';

interface Props {
  task: typeTask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {

  return (
    <div className={styles.task}>
      <button 
        className={styles.checkButton} 
        onClick={() => onComplete(task.id)}
      >
      {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textMarked : ''}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <img src={trash} />
      </button>
    </div>
  )
}

