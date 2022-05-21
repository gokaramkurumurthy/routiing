import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
      <div>
              <Header/>
             <Routes>
                 <Route path={'/'} element={<Home/>}/>
                 <Route path={'/about'} element={<About/>}/>
                 <Route path={'contact'} element={<Contact/>}/>
             </Routes>

      {/*        <Home/>
              <About/>
              <Contact/>*/}

      </div>


  )}
export default App;
