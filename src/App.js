import './App.css';
import Contactuscomponent from './assignment1/Contactuscomponent';
import Helpcomponent from './assignment1/Helpcomponent';
import Firstcomponent from './componenets/Firstcomponent';
import Secondcomponent from './componenets/Secondcomponent';

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
    </div>
  );
}

export default App;
// The above block of code is jsx.JavaScript HTML code (Involves HTNL,CSS and Javascript all at once)
