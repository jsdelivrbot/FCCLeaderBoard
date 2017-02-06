import React from 'react';

const CamperListItem = ({camper, number}) => {
  return (
    <tr>
    <td>{number}</td>
    <td><a href={`https://freecodecamp.com/${camper.username}`} target="_blank"></a>{camper.username}</td>
    <td>{camper.recent}</td>
    <td>{camper.alltime}</td>
    </tr>
  );
}


export default CamperListItem;
