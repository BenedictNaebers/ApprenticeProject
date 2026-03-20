import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/">Front Page</Link>
        </li>
        <li>
          <Link to="/overview">Overview</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  );
}


