import "./App.css";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import TaskItem from "./components/TaskItem";
import { categories, initialTasks } from "./data";

// Define the compenent
function App() {
  return (
    <div>
      <Header crumb="Home" />
      <div className="page">
        <div className="page__inner">
          <Greeting name="Jaden" />
          <ul style={{ margin: 0, padding: 0 }}>
            {initialTasks.map((task) => {
              const color = categories.find((c) => c.id === task.category)?.color ?? '#999999'
              return <TaskItem key={task.id} task={task} color={color}/>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
