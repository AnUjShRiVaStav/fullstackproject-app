
import './App.css';
import AddNotes from './component/AddNotes';
import Cards from './component/Cards';


function App() {
  return (
    <div className="App">
      <h1>Easy to Remember</h1>
      <AddNotes />
      <Cards />
    </div>
  );
}

export default App;
