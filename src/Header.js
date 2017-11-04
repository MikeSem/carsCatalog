import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header>
      	  <img className='header-photo' src="http://auto.ferrari.com/en_US/wp-content/uploads/sites/7/2016/09/ferrari_laferrari-logo70anni-v2-background.jpg" width="100%" />
	      <div className='header-background'>
		    <div  className='container'>
			  <nav className='navig clearfix'>
			    <ul>
			      <li>Top cars</li>
				  <li>Speed rating</li>
				  <li>Track</li>
				  <li>About us</li>
				</ul>
				<a href="#">Sign In</a>
			   </nav>
		    </div>
	      </div>
      </header>
    );
  }
}

export default Header;