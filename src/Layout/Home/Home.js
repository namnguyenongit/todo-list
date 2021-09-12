import { useEffect, useState } from 'react'
import OutdatedTasks from './OutdatedTasks/OutdatedTasks'
import PendingTasks from './PendingTasks/PendingTasks'
import FinishedTasks from './FinishedTasks/FinishedTasks'

function Home() {
  const [pendingTasks, setPendingTasks] = useState(null)
  const [outdatedTasks, setOutdatedTasks] = useState(null)
  const [finishedTasks, setFinishedTasks] = useState(null)
  const url = 'http://localhost:8080/tasks'
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPendingTasks(data.filter((d) => d.data.isPending))
        setOutdatedTasks(data.filter((d) => d.data.isOutdated))
        setFinishedTasks(data.filter((d) => d.data.isFinished))
      })
      .catch(() => console.log('There is an error here'))
  }, [url])

  const handleDelete = () => {}

  const handleMarkFinished = () => {}

  return (
    <div>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleMarkFinished}>Mark as finished</button>
      </div>
      {pendingTasks && <PendingTasks pendingTasks={pendingTasks} />}
      {outdatedTasks && <OutdatedTasks outdatedTasks={outdatedTasks} />}
      {finishedTasks && <FinishedTasks finishedTasks={finishedTasks} />}
    </div>
  )
}

export default Home
