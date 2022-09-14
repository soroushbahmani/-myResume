
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experiance from './components/experiance/Experiance';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <Header/>
     <Nav/>
     <About/>
     <Experiance/>
     <Services/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
