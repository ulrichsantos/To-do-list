import styles from './header.module.css'

import toDoLogo from '../../assets/Logo.svg'
import plusButton from '../../assets/plus-button.svg'
import { FormEvent, useState, ChangeEvent, KeyboardEvent } from 'react'

interface Props {
  addTask: (taskTitle: string) => void
}

export function Header({ addTask }: Props) {
  const [title, setTitle] = useState("");

  function handleClick(event: FormEvent) {
    event.preventDefault();

    addTask(title);
    setTitle('');
  }

  function handleEnter(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleClick(event);
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return( 
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={toDoLogo} />
      </div>

      <div className={styles.wrapper}>
        <form className={styles.input} >
          <input 
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={onChangeTitle}
            onKeyDown={handleEnter}
            value={title}
          />
        </form>
        <div className={styles.button}>
          <button 
            onClick={handleClick}
          >
            Criar
            <img src={plusButton} />
          </button>
        </div>
      </div>
    </div>
  )
}