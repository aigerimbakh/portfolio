import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbaar";
import { Banner } from "./components/Head";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from './components/Contact';
import {Footer} from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      
      <Projects />
     

      
    </div>
  );
}

export default App;
