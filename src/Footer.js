import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <footer className='footer-background'>
	    <div className='clearfix container'>
		  <div className='location'>
		    <p>
			  You can find us in <a  href="#">Monaco</a>
			</p>
		  </div>
		  <div className='social-networks'>
		    <p>Find us in</p>
		    <a href="www.vk.com">VK</a>
		    <a href="www.instagram.com">Instagram</a>
		    <a href="www.facebook.com">Facebook</a>
		  </div>
		  <div className='developer'>
		    <p>Developed by</p>
		    <a href="https://www.facebook.com/profile.php?id=100022127299303&ref=bookmarks">ME ;)</a>
		  </div>
	    </div>
      </footer>
    );
  }
}

export default Footer;