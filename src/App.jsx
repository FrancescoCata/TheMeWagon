import './App.css';

// -- COMPONENTS
import Header from './header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import InfoCardSection from './infoCardSection/InfoCardSection';
import AboutUsSection from './aboutUsSection/AboutUsSection';
import Menu from './menu/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <InfoCardSection/>
      <AboutUsSection/>
      <Menu/>
    </div>
  );
}

export default App;
