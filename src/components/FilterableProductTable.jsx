import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import dataObject from './../data.json';

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      string: '',
      productsList: dataObject.data,
    };
  }

  filter = () => {
    const productsList = this.state.productsList.filter((product) => {
      return product.name.toLowerCase().includes(this.state.string);
    });
    return productsList;
  };

  searchHandler = (string) => {
    this.setState({ string });
  };

  render() {
    const filteredList = this.filter();
    return (
      <div>
        <SearchBar onEdit={this.searchHandler} />
        <ProductTable products={filteredList} />
      </div>
    );
  }
}

export default FilterableProductTable;
