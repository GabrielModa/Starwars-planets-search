import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import PlanetContext from '../context/PlanetContext';

function Home() {
  const { setFilterByName,
    filterColumn,
    setFilterColumn,
    filterInputNumber,
    setFilterInputNumber,
    setFilterComparation,
    filterButton,
    setfilterButton,
    removeByValue,
    setRemoveByValue } = useContext(PlanetContext);

  useEffect(() => {
    setfilterButton();
  }, [setFilterColumn, setFilterInputNumber, setFilterComparation, setfilterButton]);

  function rremoveByValue() {
    const select = filterColumn.split();

    select.map((option) => (option === filterColumn ? removeByValue === true
      : removeByValue === false));
    // console.log(filterColumn, select);
  }

  // useEffect(() => {
  //   rremoveByValue();
  // }, [filterColumn, rremoveByValue, setRemoveByValue]);

  return (
    <main>
      <header>
        <input
          type="search"
          placeholder="Search"
          data-testid="name-filter"
          className="filterName"
          onChange={ ({ target: { value } }) => setFilterByName(value) }
        />
        <select
          name=""
          id=""
          isOptionDisabled={ removeByValue }
          data-testid="column-filter"
          onClick={ () => rremoveByValue() }
          onChange={ ({ target: { value } }) => setFilterColumn(value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>

        <select
          name=""
          id=""
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setFilterComparation(value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <input
          type="number"
          value={ 0 || filterInputNumber }
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setFilterInputNumber(value) }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setfilterButton(!filterButton) }
        >
          Filtro

        </button>
      </header>
      <section>
        <Table />
      </section>
    </main>
  );
}

export default Home;
