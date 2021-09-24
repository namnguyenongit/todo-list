import styles from './OutdatedTasks.module.css'
import { useEffect, useState } from 'react'

function OutdatedTasks({ outdatedTasks }) {
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    setTasks(outdatedTasks)
  }, [outdatedTasks])

  // Handle select and select all
  function handleSelectAll(e) {
    const { checked } = e.target
    let tempTasks = tasks.map((task) => {
      return { ...task, isChecked: checked }
    })
    setTasks(tempTasks)
  }

  function handleSelect(e) {
    const { id, checked } = e.target
    let tempTasks = tasks.map((task) =>
      task.id === parseInt(id) ? { ...task, isChecked: checked } : task
    )
    setTasks(tempTasks)
  }

  const handleDelete = () => {
    tasks &&
      tasks.forEach((task) => {
        if (task.isChecked) {
          fetch('http://localhost:8080/tasks/' + task.id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((res) => {
              res.json()
            })
            .then(() => window.location.reload(false))
            .catch((e) => console.log('[Fetch error at OutdatedTasks]:\n' + e))
        }
      })
  }

  const catalog =
    tasks &&
    tasks.map((task) => (
      <div key={task.id} className={styles['items']}>
        <div className={styles['date']}>
          <div>{task.data.date}</div>
          <input
            type="checkbox"
            id={task.id}
            checked={task?.isChecked || false}
            onChange={handleSelect}
          ></input>
        </div>
        <div>{task.data.jobs}</div>
      </div>
    ))

  return (
    <div>
      <div className={styles['top']}>
        <h2 className={styles['title']}>Outdated Tasks</h2>
        <div>
          <div className={styles['select-all']}>
            <span>Select all</span>
            <input
              type="checkbox"
              id="selectAll"
              checked={
                (tasks &&
                  tasks.filter((task) => task?.isChecked !== true).length <
                    1) ||
                false
              }
              onChange={handleSelectAll}
            ></input>
          </div>
          <div className={styles['options']}>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
      <div className={styles['wrapper']}>{catalog}</div>
    </div>
  )
}

export default OutdatedTasks
