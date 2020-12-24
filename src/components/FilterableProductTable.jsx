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
      inStockFilter: false
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

  inStockHandler = (value) => {
    console.log(value);

    if (!this.state.inStockFilter) {
    const inStock = dataObject.data.filter(e=> e.stocked)
    this.setState({
      inStockFilter: true,
      productsList: inStock
    })
    } else {
      this.setState({
        inStockFilter: false,
        productsList: dataObject.data
      })
    }
    
  };

  render() {
    const filteredList = this.filter();
    return (
      <div>
        <SearchBar onEdit={this.searchHandler} inStock={this.inStockHandler} />
        <ProductTable products={filteredList} />
      </div>
    );
  }
}

export default FilterableProductTable;
