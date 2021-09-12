import { useEffect, useState } from 'react'

function useHandleSelect(data) {
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    setTasks(data)
  }, [data])

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
      task.id.toString() === id ? { ...task, isChecked: checked } : task
    )
    setTasks(tempTasks)
  }

  return {
    handleSelect,
    handleSelectAll,
    tasks,
  }
}

export default useHandleSelect
