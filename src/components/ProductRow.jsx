import React from 'react';

const ProductRow = (props) => {
  return (
    <tr>
      <td>{props.product}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
