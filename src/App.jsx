import { Link } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <br></br>
            <Link to="/profile/popeye">Popeye's profile</Link>
            <br />
            <Link to="/profile/spinach">Spinach's profile</Link>
            <br />
            <Link to="help">Help section</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App
