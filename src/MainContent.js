import React, { Component } from 'react';
import './App.css';


class MainContent extends Component {
  render() {
    return (
      <div className='main-content'>
        {this.props.items.map((item, index) =>
            <div key={index} className='car-block'>
              <img src={item.photo} width='300px'/>
              <p>
            	{item.brand} {item.model}<br />
            	Price: {item.price}$<br />
            	Engine capacity: {item.engCapacity}<br />
            	Transmission: {item.transmission}<br />
            	Color: {item.color}
              </p>
            </div>	
          )}
        <button className='more-btn' type="button">Load more</button>
      </div>
    );
  }
}

export default MainContent;