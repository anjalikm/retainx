import React, { useEffect, useState } from 'react';
import Activities from './Components/Activities/Activities';

import './App.css';

function App() {
  
  const [activities, setActivites] = useState({});
  const [dimension, setDimension] = useState('org');
  const [filter, setFilter] = useState('3days');
  // TODO loading state
  useEffect(() => {
    // setAppState({ loading: true });
    const apiUrl = `https://fast-dusk-45749.herokuapp.com/activities`;
    fetch(apiUrl)
    .then((res) => res.json())
    .then((activities) => {
        setActivites(activities);
      });
  }, [setActivites]);
  
  function onDimensionChange(event) {
    console.log(event.target.value);
    setDimension(event.target.value);
  }

  function onFilterChange(event) {
    setFilter(event.target.value);
  }
  return (
    <div className="App">
      <div className='activities-wrapper'>
        <div className='radio-section radio-section-dim'>
          <input type="radio" value="org" name="dimension"  checked={dimension === "org"}  onChange={onDimensionChange}/> Organization
          <input type="radio" value="system" name="dimension" checked={dimension === "system"}  onChange={onDimensionChange}/> System
        </div>
        <div className='radio-section radio-section-filter'>
        <select onChange={onFilterChange}>
          <option selected={filter === '3'} value="3">3 Days</option>
          <option selected={filter === '7'} value="7">7 Days</option>
          <option selected={filter === '30'} value="30">30 Days</option>
        </select>
        </div>
        <div className="recent-activities">
          {activities && activities.length && 
          <Activities activities={activities} dimension={dimension} filter={filter} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
