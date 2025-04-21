import './App.css';
import Navbar from './components/Navbar';
import WealthsimpleTax from './components/WealthsimpleTax';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
          <WealthsimpleTax />
      </header>
    </div>
  );
}

export default App;
