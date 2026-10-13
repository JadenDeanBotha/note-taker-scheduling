import "./App.css";
import Header from "./components/Header";
import Greeting from "./components/Greeting";

// Define the compenent
function App() {
  return (
    <div>
      <Header crumb="Home" />
      <div className="page">
        <div className="page__inner">
          <Greeting name="Jaden" />
        </div>
      </div>
    </div>
  );
}

export default App;
