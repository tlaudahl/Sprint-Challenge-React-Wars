import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import InfoCard from './components/InfoCard';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState('https://swapi.co/api/people/?page=1');

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios.get(`${page}`)
    .then(response => {
      console.log(response.data);
      setData(response.data.results);
      setPage(response.data.next);
    }).catch(error => {
      console.log('The data could not be returned', error);
    });
  }, []);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <div className='CardContainer'>
          {data.map(item => {
            return <InfoCard name={item.name} birthYear={item.birth_year} height={item.height} mass={item.mass}key={item.name} />
          })}
        </div>
    </div>
  );
}

export default App;
