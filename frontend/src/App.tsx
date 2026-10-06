import Hello from './components/Hello';

// Define the compenent
function App() {
  return (
    <div>
      <h1>Today</h1>
      <Hello name="Jaden" tasksLeft={3} />
      <Hello name="Mom" />
    </div>
  )
}

export default App