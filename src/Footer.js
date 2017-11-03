import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <div>
	    <div>
		  <p>
		    You can find us in <a  href="#">Monaco</a>
		  </p>
		</div>
		<div>
		  <p>Find us in</p>
		  <a href="www.vk.com">VK</a>
		  <a href="www.instagram.com">Instagram</a>
		  <a href="www.facebook.com">Facebook</a>
	    </div>
		<div>
		  <p>Developed by</p>
		  <a href="https://www.facebook.com/profile.php?id=100022127299303&ref=bookmarks">ME ;)</a>
	    </div>
      </div>
    );
  }
}

export default Footer;