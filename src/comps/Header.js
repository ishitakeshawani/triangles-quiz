import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="nav">
        <ul className="top-right">
          <li>
            <Link className="title" to="/">
              Traingle Quiz
            </Link>
          </li>
          <div>
            <li>
              <Link to="/angle">Angles</Link>
            </li>
            <li>
              <Link to="/area">Area</Link>
            </li>
            <li>
              <Link to="/hypotenuse">Hypotenuse</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}


export default Header;