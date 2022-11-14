import './App.css';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';



//page components
import Home from './Components/Home';
import Characters from './Components/Characters';
import Character from './Components/Character';
import Planets from './Components/Planets';
import Planet from './Components/Planet';
import Races from './Components/Races';
import Race from './Components/Race';
import Error404 from './Components/Error404';

function App() {

  function openMenu() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('hidden'); 
  }

  function closeMenu() {
    const overlay = document.querySelector('.overlay'); 
    overlay.classList.add('hidden');
  }

  return (
    <div className="App">
      <BrowserRouter>
      <header className="header">
        
        <nav className="nav-bar">
          <p className="site-title"><Link to="/">StarWars Encyclopedia</Link></p>

          <i className="fa-solid fa-bars hamburger" onClick={openMenu} />
          <div className="overlay hidden">
            <ul className="nav-list">
              <li className="close-menu"><i class="fa-solid fa-x" onClick={closeMenu}/></li>
              <li><NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink className="nav-link" to="/characters" onClick={closeMenu}>Characters</NavLink></li>
              <li><NavLink className="nav-link" to="/planets" onClick={closeMenu}>Planets</NavLink></li>
              <li><NavLink className="nav-link" to="/Races" onClick={closeMenu}>Races</NavLink></li>
            </ul>
          </div>

          <ul class="desktop-nav">
              <li><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li><NavLink className="nav-link" to="/characters">Characters</NavLink></li>
              <li><NavLink className="nav-link" to="/planets">Planets</NavLink></li>
              <li><NavLink className="nav-link" to="/Races">Races</NavLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path ="/characters" element={<Characters />} />
        <Route path ="/characters/:id" element={<Character />} />

        <Route path ="/planets" element={<Planets />} />
        <Route path ="/planets/:id" element={<Planet />} />

        <Route path="/races" element={<Races />} />
        <Route path="/races/:id" element={<Race />} />

        <Route path="*" element={<Error404 />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
