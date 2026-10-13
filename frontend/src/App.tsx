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
            <TaskItem task={initialTasks[0]} color={categories[0].color} />
            <TaskItem task={initialTasks[1]} color={categories[0].color} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
