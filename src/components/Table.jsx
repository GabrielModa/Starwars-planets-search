import React, { useContext/* , useEffect */ } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data,
    filterByName,
    filterColumn,
    filterComparation,
    filterInputNumber,
    filterButton } = useContext(PlanetContext);

  function mapFiltersTable() {
    return Object.keys(data).length
      && data
        .filter((planet) => planet.name.toLowerCase()
          .includes(filterByName.toLowerCase()))
        .filter((population) => {
          switch (filterComparation) {
          case 'maior que':
            return Number(population[filterColumn]) > Number(filterInputNumber);

          case 'menor que':
            return Number(population[filterColumn]) < Number(filterInputNumber);

          case 'igual a':
            return Number(population[filterColumn]) === Number(filterInputNumber);

          default:
            return null;
          }
        })
        .map((element, index) => (
          <tr key={ index }>
            <td>{element.name}</td>
            <td>{element.rotation_period}</td>
            <td>{element.orbital_period}</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>

            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
            <td>{element.surface_water}</td>
            <td>{element.population}</td>
            <td>{element.films}</td>
            <td>{element.created}</td>
            <td>{element.edited}</td>
            <td>{element.url}</td>
          </tr>
        ));
  }

  function mapTable() {
    return Object.keys(data).length
      && data
        .filter((planet) => planet.name.toLowerCase()
          .includes(filterByName.toLowerCase()))
        .map((element, index) => (
          <tr key={ index }>
            <td>{element.name}</td>
            <td>{element.rotation_period}</td>
            <td>{element.orbital_period}</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>
            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
            <td>{element.surface_water}</td>
            <td>{element.population}</td>
            <td>{element.films}</td>
            <td>{element.created}</td>
            <td>{element.edited}</td>
            <td>{element.url}</td>
          </tr>
        ));
  }

  // useEffect(() => {
  //   mapTable();
  //   return () => {
  //     mapFiltersTable();
  //   };
  // }, [filterButton, mapFiltersTable, mapTable]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {filterButton ? mapFiltersTable() : mapTable()}
      </tbody>
    </table>
  );
}

export default Table;
