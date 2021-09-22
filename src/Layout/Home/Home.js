import { useEffect, useState } from 'react'
import PendingTasks from './PendingTasks/PendingTasks'

function Home() {
  const [pendingTasks, setPendingTasks] = useState(null)
  // const [outdatedTasks, setOutdatedTasks] = useState(null)
  // const [finishedTasks, setFinishedTasks] = useState(null)
  const url = 'http://localhost:8080/tasks'
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPendingTasks(data.filter((d) => d.data.isPending))
        // setOutdatedTasks(data.filter((d) => d.data.isOutdated))
        // setFinishedTasks(data.filter((d) => d.data.isFinished))
      })
      .catch(() => console.log('There is an error here'))
  }, [url])

  return (
    <div>{pendingTasks && <PendingTasks pendingTasks={pendingTasks} />}</div>
  )
}

export default Home
