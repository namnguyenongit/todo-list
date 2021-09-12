import styles from './TasksFormat.module.css'

function TasksFormat({ specify, tasks, handleSelect, handleSelectAll }) {
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
        <h2 className={styles['title']}>{specify}</h2>
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

export default TasksFormat
