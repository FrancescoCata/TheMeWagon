import './tailwind-output.css';
import 'font-awesome/css/font-awesome.min.css';

// -- COMPONENTS
import Header from './header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import InfoCardSection from './infoCardSection/InfoCardSection';
import AboutUsSection from './aboutUsSection/AboutUsSection';
import Menu from './menu/Menu';
import BookATable from './bookATableSection/BookATableSection';
import TeamSection from './teamSection/TeamSection';
import TestimonialSection from './testimonialSection/TestimonialSection';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App w-full lg:w-[90%] bg-white mx-auto">
      <Header/>
      <Jumbotron/>
      <InfoCardSection/>
      <AboutUsSection/>
      <Menu/>
      <BookATable/>
      <TeamSection/>
      <TestimonialSection/>
      <Footer/>
    </div>
  );
}

export default App;
