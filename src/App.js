import './App.css';
import Contactuscomponent from './assignment1/Contactuscomponent';
import Helpcomponent from './assignment1/Helpcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to learning ReactJS</h1>
      <h2>React is fun</h2>

      </header>
       {/* Below we render/display/show our components */}
      <Firstcomponent/>
      <Secondcomponent/>
      <Contactuscomponent/>
      <Helpcomponent/>
      <Thirdcomponent/>
      <Fourthcomponent/>
      <Fifthcomponent/>
    </div>
  );
}

export default App;
// The above block of code is jsx.JavaScript HTML code (Involves HTML,CSS and Javascript all at once)
// This is the root/main component