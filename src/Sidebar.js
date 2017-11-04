import React, { Component } from 'react';
import './App.css';


class Sidebar extends Component {
  render() {
    return (
      <form className='search-form'>
          <b>Brand</b>
          {this.props.items.map((item, index) =>
            <label className='brand-check' key={index}>
              <input key={index} type='checkbox'/>
              {item}
            </label>	
          )}
          <b>Select Price:</b>
          <input type='text' placeholer='min'/>
          to
          <input type='text' placeholer='max'/>
          <b>Engine capacity:</b>
          <input type='text' placeholer='min'/>
          to
          <input type='text' placeholer='max'/>
          <b>Transmission:</b>
          <label>
          	<input type='radio' name='transmission' value='1'/>
          	Manual
          </label>
          <label>
          	<input type='radio' name='transmission' value='2'/>
          	Automatic
          </label>
      </form>
    );
  }
}

export default Sidebar;
