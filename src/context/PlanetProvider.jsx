import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetContext from './PlanetContext';

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparation, setFilterComparation] = useState('maior que');
  const [filterInputNumber, setFilterInputNumber] = useState(0);
  const [filterButton, setfilterButton] = useState(false);

  const getStarWarsAPI = async () => {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await request.json();
    const { results } = response;

    setData(results);
  };

  useEffect(() => {
    getStarWarsAPI();
  }, []);

  const contextValue = {
    data,
    filterByName,
    setFilterByName,
    filterColumn,
    setFilterColumn,
    filterComparation,
    setFilterComparation,
    filterInputNumber,
    setFilterInputNumber,
    filterButton,
    setfilterButton,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>

  );
};

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
