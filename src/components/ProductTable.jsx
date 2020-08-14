import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    return (
      <div>
        <table style={{ margin: '0 auto' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              return (
                <ProductRow product={product.name} price={product.price} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
