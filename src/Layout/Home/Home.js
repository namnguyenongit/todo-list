import { useEffect, useState } from 'react'
import PendingTasks from './Tasks/PendingTasks/PendingTasks'
import FinishedTasks from './Tasks/FinishedTasks/FinishedTasks'
import OutdatedTasks from './Tasks/OutdatedTasks/OutdatedTasks'

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
      .catch((e) => console.log('[Fetch error at Home]:\n' + e))
  }, [url])

  return (
    <div>
      {pendingTasks && <PendingTasks pendingTasks={pendingTasks} />}
      {finishedTasks && <FinishedTasks finishedTasks={finishedTasks} />}
      {outdatedTasks && <OutdatedTasks outdatedTasks={outdatedTasks} />}
    </div>
  )
}

export default Home
