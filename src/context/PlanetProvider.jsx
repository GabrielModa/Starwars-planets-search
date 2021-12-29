import React, { useEffect, useState } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [API, setAPI] = useState([]);

  useEffect(() => {
    const getStartWarsAPI = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await request.json();
      setAPI(results);
    };

    getStartWarsAPI();
  }, []);

  const contextValue = {
    API,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>

  );
}

export default PlanetProvider;
