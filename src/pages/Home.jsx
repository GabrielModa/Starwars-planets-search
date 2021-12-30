import React, { useContext } from 'react';
import Table from '../components/Table';
import PlanetContext from '../context/PlanetContext';

function Home() {
  const { setFilterByName } = useContext(PlanetContext);

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
      </header>
      <section>
        <Table />
      </section>
    </main>
  );
}

export default Home;
