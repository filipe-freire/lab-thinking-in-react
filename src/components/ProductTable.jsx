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
                <ProductRow key={product.name}
                  product={product.name}
                  price={product.price}
                  stocked={product.stocked}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
