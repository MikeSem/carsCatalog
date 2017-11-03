import React, { Component } from 'react';
import './App.css';


class MainContent extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) =>
            <div key={index}>
              <img src={item.photo} width='200px'/>
              <p>
            	{item.brand} {item.model}<br />
            	Price: {item.price}$<br />
            	Engine capacity: {item.engCapacity}<br />
            	Transmission: {item.transmission}<br />
            	Color: {item.color}
              </p>
            </div>	
          )}
        <button type="button">Load more</button>
      </div>
    );
  }
}

export default MainContent;