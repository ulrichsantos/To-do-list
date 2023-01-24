import { useState } from "react"

import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

export interface typeTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<typeTask[]>([]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      },
    ]);
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks);
  }

  function markTask(taskId: string) {
     const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
     });
     setTasks(newTasks);
  }

  return (
    <div>
      <Header 
        addTask={addTask}
      />
      <Tasks 
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={markTask}
      />
    </div>
  )
}

