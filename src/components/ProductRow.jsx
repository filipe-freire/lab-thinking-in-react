import React from 'react';

const ProductRow = (props) => {
  function stockCheck() {
    return props.stocked ? 'inherit' : 'red';
  }
  return (
    <tr>
      <td style={{ color: stockCheck() }}> {props.product}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
