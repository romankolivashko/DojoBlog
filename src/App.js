import Navabr from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  //const person = { name: 'yoshi', age: 30 };
  //numbers and strings are fine
  //booleans and object are not
  const link = "http://www.google.com";
  
  return (
    <div className="App">
      <Navabr />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
