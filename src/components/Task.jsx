
const Task = ({task}) => {
  console.log(task)
  return (
    <div>{task.name} | {String(task.done)}</div>
  )
}

export default Task