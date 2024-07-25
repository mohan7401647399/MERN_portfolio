import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Title from './components/Title';
import { useEffect } from 'react';
// import DarkLightTest from './components/DarkLightTest';

function App() {

  useEffect(() => {
    console.log("page reloaded");
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Title />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <DarkLightTest /> */}
    </div>
  );
}

export default App;