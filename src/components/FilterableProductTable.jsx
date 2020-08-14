import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
