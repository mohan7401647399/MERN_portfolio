import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Animations from './components/Animations/Animations'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
// import DarkLightTest from './components/DarkLightTest';
// import GithubCalender from './components/GithubCalender'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Animations />} />
        <Route path='/home' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ToastContainer position="bottom-left" />
      {/* <GithubCalender /> */}
      {/* <DarkLightTest /> */}
    </div>
  );
}

export default App;