import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Footer from './Footer';

const carBrand = ["Aston Martin", "BMW", "Bugatti", "Ferrari", "Porshe", "Lamborgini", "Koenigsegg"];
const cars = [
  {
    photo: 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC40ANC061A01300.jpg',
    brand: 'Aston Martin',
    model: 'Vanquish',
    engCapacity: 3.6,
    transmission: 'manual',
    price: 300000,
    color: 'brown',
  },
  {
    photo: 'https://media.caranddriver.com/images/media/331369/the-bugatti-chiron-set-its-first-record-zero-to-249-mph-to-zero-in-42-seconds-photo-690833-s-450x274.jpg',
    brand: 'Bugatti',
    model: 'Chiron',
    engCapacity: 6.2,
    transmission: 'Automatic',
    price: 2000000,
    color: 'blue',
  },
  {
    photo: 'http://www.a777aa77.ru/koenigsegg/2015-koenigsegg-regera.jpg',
    brand: 'Koenigsegg',
    model: 'Regera',
    engCapacity: 6.0,
    transmission: 'Automatic',
    price: 2000000,
    color: 'blue',
  },
  {
    photo: 'https://pictures.topspeed.com/IMG/crop/201703/porsche-isn-t-steppi_800x0w.jpg',
    brand: 'Porshe',
    model: '918',
    engCapacity: 4.5,
    transmission: 'Manual',
    price: 700000,
    color: 'grey',
  }
];
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='clearfix container'>
          <Sidebar  items={carBrand} />
          <MainContent items={cars} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
