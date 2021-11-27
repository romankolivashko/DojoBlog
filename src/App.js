import Navabr from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  
  return (
    <Router>
    <div className="App">
      <Navabr />
      <div className="content">
        <Home />
      </div>
    </div>
    </Router>
  );
}

export default App;
