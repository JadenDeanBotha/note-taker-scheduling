import "./App.css";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import CategoryColumn from "./components/CategoryColumn";
import ProgressSummary from "./components/ProgressSummary";
import AddTaskForm from "./components/AddTaskForm";
import { categories, initialTasks } from "./data";

// Define the compenent
function App() {
  return (
    <div>
      <Header crumb="Home" />
      <div className="page">
        <div className="page__inner">
          <div className="page__top">
            <Greeting name="Jaden" />
            <ProgressSummary tasks={initialTasks} categories={categories} />
          </div>
          <AddTaskForm categories={categories} selectedId="work"/>
          <div className="columns">
            {categories.map((category) => (
              <CategoryColumn
                key={category.id}
                category={category}
                tasks={initialTasks.filter(
                  (task) => task.category === category.id,
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
