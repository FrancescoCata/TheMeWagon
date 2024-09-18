import './App.css';

// -- COMPONENTS
import Header from './header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import InfoCardSection from './infoCardSection/InfoCardSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <InfoCardSection/>
    </div>
  );
}

export default App;
