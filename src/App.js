import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import {Contact} from './components/Conatact'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Footer2 } from './Footer2';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* <Newsletter/> */}
      {/* <Footer/> */}
      <Footer2/>
    </div>
  );
}

export default App;
