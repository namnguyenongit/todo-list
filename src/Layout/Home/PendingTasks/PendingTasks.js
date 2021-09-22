import styles from './TasksFormat.module.css'
import { useEffect, useState } from 'react'

function PendingTasks({ pendingTasks }) {
  const [tasks, setTasks] = useState(null)
  const [ids, setIds] = useState([])

  useEffect(() => {
    setTasks(pendingTasks)
  }, [pendingTasks])

  // Handle select and select all
  function handleSelectAll(e) {
    // OK
    const { checked } = e.target
    setIds(checked ? tasks.map((task) => task.id) : [])
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
    setIds([...ids, parseInt(id)])
    console.log(ids)
    setTasks(tempTasks)
  }

  // Handle delete, handle mark as finished
  const handleDelete = (ids) => {
    if (ids) {
      ids.forEach((id) => {
        fetch('http://localhost:8080/tasks' + id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(console.log(`Id: ${id} deleted`))
          .catch(console.log(`Id: ${id} can't be deleted`))
      })
    } else {
      alert('Chose a task to delete first!')
    }
  }

  const handleMarkFinished = (ids) => {
    console.log('handleMarkFinished')
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
        <h2 className={styles['title']}>Pending tasks</h2>
        <div>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleMarkFinished}>Mark as finished</button>
        </div>
        <div>
          <span>Select all</span>
          <input
            type="checkbox"
            id="selectAll"
            checked={
              (tasks &&
                tasks.filter((task) => task?.isChecked !== true).length < 1) ||
              false
            }
            onChange={handleSelectAll}
          ></input>
        </div>
      </div>
      <div className={styles['wrapper']}>{catalog}</div>
    </div>
  )
}

export default PendingTasks
