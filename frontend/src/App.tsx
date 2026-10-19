import "./App.css";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import CategoryColumn from "./components/CategoryColumn";
import { categories, initialTasks } from "./data";

// Define the compenent
function App() {
  return (
    <div>
      <Header crumb="Home" />
      <div className="page">
        <div className="page__inner">
          <Greeting name="Jaden" />
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
