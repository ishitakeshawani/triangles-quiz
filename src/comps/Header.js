import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="nav">
        <Link className="title" to="/">
          Traingle Quiz
        </Link>
        <div className="top-right">
          <Link to="/angle">Angles</Link>
          <Link to="/area">Area</Link>
          <Link to="/hypotenuse">Hypotenuse</Link>
          <Link to="/quiz">Quiz</Link>
        </div>
      </div>
    </>
  );
}


export default Header;