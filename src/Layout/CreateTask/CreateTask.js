import { useState } from 'react'
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
        isPending: !checkDate(date),
        isOutdated: checkDate(date),
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
        alert('Task created!')
      })
      .catch((e) => console.log('[Create tasks error]:\n' + e))
  }

  //check if date expired, return true or false
  function checkDate(date) {
    let thisDate = new Date()
    let currentDate = new Date(date)
    if (thisDate > currentDate) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className={styles['cover']}>
      <form className={styles['form-control']} onSubmit={handleSubmit}>
        <div className={styles['input-cover']}>
          <p>Date</p>
          <input
            required
            onChange={(e) => setDate(e.target.value)}
            type='date'
          ></input>
        </div>
        <div className={styles['input-cover']}>
          <p>Tasks</p>
          <input
            required
            onChange={(e) => setTask(e.target.value)}
            type='text'
          ></input>
        </div>
        <input
          type={'submit'}
          className={styles['button-cover']}
          value={'Submit'}
        />
      </form>
    </div>
  )
}

export default CreateTask
