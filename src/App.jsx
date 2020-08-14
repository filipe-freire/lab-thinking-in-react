import React from 'react';
import dataObject from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      <FilterableProductTable products={dataObject.data} />
    </div>
  );
}

export default App;
