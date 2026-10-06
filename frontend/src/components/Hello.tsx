
type HelloProps = {
  name: string
  tasksLeft?: number
}


function Hello ({name, tasksLeft}: HelloProps) {
  return <p>Hello, {name}! {tasksLeft !== undefined && <p> You have {tasksLeft} tasks left.</p>}</p>
}

export default Hello;