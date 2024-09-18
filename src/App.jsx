import './App.css';

// -- COMPONENTS
import Header from './header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import InfoCardSection from './infoCardSection/InfoCardSection';
import AboutUsSection from './aboutUsSection/AboutUsSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <InfoCardSection/>
      <AboutUsSection/>
    </div>
  );
}

export default App;
