import useHandleSelect from '../useHandleSelect/useHandleSelect'
import TasksFormat from '../TasksFormat/TasksFormat'

function FinishedTasks({ finishedTasks }) {
  const { handleSelect, handleSelectAll, tasks } =
    useHandleSelect(finishedTasks)

  return (
    <TasksFormat
      specify="Finished Tasks"
      tasks={tasks}
      handleSelect={handleSelect}
      handleSelectAll={handleSelectAll}
    />
  )
}

export default FinishedTasks
