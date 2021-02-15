import React from 'react';

function Activities(props) {
    let sortedActivities = props.activities;
    console.log(props.dimension);
    console.log(props.filter);
    // if(props.orderBy === 'date') {
    //   sortedActivities = props.activities.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    // }
    // else {
    //   sortedActivities = props.activities.slice().sort((a, b) => b.upvotes  - a.upvotes);
    // }
    return (
        <div className="card w-50 mx-auto">
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
                {sortedActivities.map((activity, index) => {
                    return (
                        <tr data-testid="activity" key={`activity-${index}`}>
                            <td data-testid="activity-class">{activity.classification}</td>
                            <td data-testid="activity-date">{activity.date}</td>
                            <td data-testid="activity-system">{activity.system}</td>
                            <td data-testid="activity-org">{activity.orgnization}</td>
                        </tr>
                    );
                })}
               
                </tbody>
            </table>
        </div>
    );

}

export default Activities;
