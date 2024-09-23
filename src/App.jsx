import './App.css';
import './tailwind-output.css';

// -- COMPONENTS
import Header from './header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import InfoCardSection from './infoCardSection/InfoCardSection';
import AboutUsSection from './aboutUsSection/AboutUsSection';
import Menu from './menu/Menu';
import BookATable from './bookATableSection/BookATableSection';
import TeamSection from './teamSection/TeamSection';
import TestimonialSection from './testimonialSection/TestimonialSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <InfoCardSection/>
      <AboutUsSection/>
      <Menu/>
      <BookATable/>
      <TeamSection/>
      <TestimonialSection/>
    </div>
  );
}

export default App;
