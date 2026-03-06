import './App.css';
import Contactuscomponent from './assignment1/Contactuscomponent';
import Helpcomponent from './assignment1/Helpcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Notfound from './components/Notfound';
import Secondcomponent from './components/Secondcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

      <nav>
        <Link to="/first" className='navlinks'>First</Link>
        <Link to="/second" className='navlinks'>Second</Link>
        <Link to="/third" className='navlinks'>Third</Link>
        <Link to="/fourth" className='navlinks'>Fourth</Link>
        <Link to="/fifth" className='navlinks'>Fifth</Link>
        <Link to="/sixth" className='navlinks'>Sixth</Link>
        <Link to="/contact" className='navlinks'>Contact</Link>
        <Link to="/help" className='navlinks'>Help</Link>
      </nav>

      <header className="App-header">
      <h1>Welcome to learning ReactJS</h1>
      <h2>React is fun</h2>
      </header>

       {/* Below we render/display/show our components */}
      <Routes>
        <Route path="/first" element= {<Firstcomponent/>} />
        <Route path="/second" element= {<Secondcomponent/>} />
        <Route path="/third" element= {<Thirdcomponent />} />
        <Route path="/fourth" element= {<Fourthcomponent/>} />
        <Route path="/fifth" element= {<Fifthcomponent/>} />
        <Route path="/sixth" element= {<Sixthcomponent/>} />
        <Route path="/contact" element= {<Contactuscomponent/>} />
        <Route path="/help" element= {<Helpcomponent/>} />
        <Route path="*" element= {<Notfound/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
// The above block of code is jsx.JavaScript HTML code (Involves HTML,CSS and Javascript all at once)
// This is the root/main component