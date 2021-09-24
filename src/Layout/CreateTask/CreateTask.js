import { useState } from 'react/cjs/react.development'
import styles from './createTask.module.css'

function CreateTask() {
  const [date, setDate] = useState('')
  const [task, setTask] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      data: {
        date: date,
        jobs: task,
        isPending: true,
        isOutdated: false,
        isFinished: false,
      },
    }
    fetch('http://localhost:8080/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setTask(null)
        setDate(null)
      })
      .catch((e) => console.log('[Create tasks error]:\n' + e))
  }

  return (
    <div className={styles['cover']}>
      <form className={styles['form-control']} onSubmit={handleSubmit}>
        <div className={styles['input-cover']}>
          <p>Date</p>
          <input
            required
            onChange={(e) => setDate(e.target.value)}
            type="date"
          ></input>
        </div>
        <div className={styles['input-cover']}>
          <p>Tasks</p>
          <input
            required
            onChange={(e) => setTask(e.target.value)}
            type="text"
          ></input>
        </div>
        <div className={styles['button-cover']}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
