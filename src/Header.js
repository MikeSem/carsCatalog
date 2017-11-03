import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div>
	    <img src="http://auto.ferrari.com/en_US/wp-content/uploads/sites/7/2016/09/ferrari_laferrari-logo70anni-v2-background.jpg" width="100%" />
		<nav>
		  <ul>
		    <li>Top cars</li>
		    <li>Speed rating</li>
		    <li>Track</li>
		    <li>About us</li>
		  </ul>
		  <a href="#">Sign In</a>
		</nav>
      </div>
    );
  }
}

export default Header;