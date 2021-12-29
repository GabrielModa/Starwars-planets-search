import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { API } = useContext(PlanetContext);
  console.log(API);

  return (
    <div>
      { API.map((element) => (
        <p key={ element.name }>
          {element.name}
        </p>)) }
    </div>
  );
}

export default Table;
