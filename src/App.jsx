import './App.css';

// -- COMPONENTS
import Header from './header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import InfoCardSection from './infoCardSection/InfoCardSection';
import AboutUsSection from './aboutUsSection/AboutUsSection';
import Menu from './menu/Menu';
import BookATable from './bookATableSection/BookATableSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <InfoCardSection/>
      <AboutUsSection/>
      <Menu/>
      <BookATable/>
    </div>
  );
}

export default App;
