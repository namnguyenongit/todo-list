import useHandleSelect from '../useHandleSelect/useHandleSelect'
import TasksFormat from '../TasksFormat/TasksFormat'

function PendingTasks({ pendingTasks }) {
  const { handleSelect, handleSelectAll, tasks } = useHandleSelect(pendingTasks)

  return (
    <TasksFormat
      specify="Pending Tasks"
      tasks={tasks}
      handleSelect={handleSelect}
      handleSelectAll={handleSelectAll}
    />
  )
}

export default PendingTasks
