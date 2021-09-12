import useHandleSelect from '../useHandleSelect/useHandleSelect'
import TasksFormat from '../TasksFormat/TasksFormat'

function OutdatedTasks({ outdatedTasks }) {
  const { handleSelect, handleSelectAll, tasks } =
    useHandleSelect(outdatedTasks)

  return (
    <TasksFormat
      specify="Outdated Tasks"
      tasks={tasks}
      handleSelect={handleSelect}
      handleSelectAll={handleSelectAll}
    />
  )
}

export default OutdatedTasks
