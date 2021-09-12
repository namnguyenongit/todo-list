import styles from './createTask.module.css'

function CreateTask() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Date</p>
          <input type="date"></input>
        </div>
        <div>
          <p>Tasks</p>
          <input type="text"></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
