import React from 'react';
// var React = require('react');
import CamperListItem from './camper_list_item';

const CamperList = ({campers}) => {
  //{campers} is essentially  props.campers

  const Items = campers.map((camper, index) => {
    console.log(campers);
    return <CamperListItem key={index} camper={camper} number={index +1}/>
  })
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Last 30 Days</th>
          <th>All Time Points</th>
        </tr>
      </thead>
      <tbody>
        {Items}
      </tbody>
    </table>
  );
}


export default CamperList;
