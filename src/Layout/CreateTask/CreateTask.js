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
        setTask('')
        setDate('')
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className={styles['cover']}>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Date</p>
          <input
            required
            onChange={(e) => setDate(e.target.value)}
            type="date"
          ></input>
        </div>
        <div>
          <p>Tasks</p>
          <input
            required
            onChange={(e) => setTask(e.target.value)}
            type="text"
          ></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
