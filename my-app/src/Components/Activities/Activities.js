import React from 'react';

function Activities(props) {
    let sortedActivities = props.activities;
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
                {/* <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr> */}
                </thead>
                <tbody>
                {sortedActivities.map((activity, index) => {
                    return (
                        <tr data-testid="activity" key={`activity-${index}`}>
                            <td data-testid="activity-id">{activity.id}</td>
                            <td data-testid="activity-upvotes">{activity.system}</td>
                        </tr>
                    );
                })}
               
                </tbody>
            </table>
        </div>
    );

}

export default Activities;
