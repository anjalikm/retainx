import React from 'react';

import { checkDateIsInLast} from '../../utilities';

function Activities(props) {
    console.log(props.dimension);
    console.log(props.filter);
    let filteredActivities = [];
    if(props.dimension === "system") {
      filteredActivities =  props.activities
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .filter((a)=> a.system)
            .filter((a)=>checkDateIsInLast(a.date, parseInt(props.filter)));
    } else if(props.dimension === "org"){
      filteredActivities =  props.activities
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .filter((a)=> a.organizations && a.organizations.length > 0)
      .filter((a)=>checkDateIsInLast(a.date, parseInt(props.filter)));
    }
   
    return (
        <div>
            <table>
                <thead>
                  <tr>
                      <th>Classification</th>
                      <th>Date</th>
                      <th>System</th>
                      <th>Orgnization</th>
                  </tr>
                </thead>
                <tbody>
                {filteredActivities.map((activity, index) => {
                    return (
                        <tr data-testid="activity" key={`activity-${index}`}>
                            <td data-testid="activity-class">{activity.classification}</td>
                            <td data-testid="activity-date">{new Date(activity.date).toDateString()}</td>
                            <td data-testid="activity-system">{activity.system}</td>
                            {activity.organizations[0] && <td data-testid="activity-org">{activity.organizations[0].name}</td>}
                        </tr>
                    );
                })}
               
                </tbody>
            </table>
        </div>
    );

}

export default Activities;
