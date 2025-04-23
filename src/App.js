import './App.css';
import Navbar from './components/Navbar';
import WealthsimpleTax from './components/WealthsimpleTax';
import GetStarted from './components/GetStarted'
import TrustSection from './components/TrustSection'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
          <WealthsimpleTax />
          <GetStarted />
          <TrustSection />
      </header>
    </div>
  );
}

export default App;
