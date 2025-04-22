import './App.css';
import Navbar from './components/Navbar';
import WealthsimpleTax from './components/WealthsimpleTax';
import GetStarted from './components/GetStarted'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
          <WealthsimpleTax />
          <GetStarted />
      </header>
    </div>
  );
}

export default App;
