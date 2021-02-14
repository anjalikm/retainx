import React, { useEffect, useState } from 'react';
import Activities from './Components/Activities/Activities';

import './App.css';

function App() {
  
  const [activities, setActivites] = useState({});
  useEffect(() => {
    // setAppState({ loading: true });
    const apiUrl = `https://fast-dusk-45749.herokuapp.com/activities`;
    fetch(apiUrl)
    .then((res) => res.json())
    .then((activities) => {
        setActivites(activities);
      });
  }, [setActivites]);


  // const activities = [
  //   {
  //   classification: "Customer",
  //   date: "2020-01-14T01:15:00.000Z",
  //   duration: 226,
  //   id: 33390395,
  //   organizations: [
  //     {
  //       id: 131531,
  //       name: "Organization #131531",
  //       visible: true
  //     }
  //   ],
  //   system: "Gmail"
  //   }
  // ]
  return (
    <div className="App">
      <div clasName="recent-activities">
        {activities && activities.length && <Activities activities={activities} />}
      </div>
    </div>
  );
}

export default App;
