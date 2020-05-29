import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='ui secondary pointer menu'>
      <Link to='/' className='item'>
        Tournament Manager
      </Link>
      <div className='menu right'>
        <Link to='/' className='item'>
          All Tournaments
        </Link>
      </div>
    </div>
  );
};

export default Header;
