import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render()  {
        return (
<div className="main-container">
<div className="header-area">
        <div className="container">
          <div className="row">
               <Link to={'/'} className="navbar-brand">
                <img src={"img/logo.png"} alt="logo" />
              </Link>
          </div>
        </div>      </div>
</div>
        );
}
}
export default Header;