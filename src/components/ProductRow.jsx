import React from 'react';

const ProductRow = (props) => {
  console.log(props);

  return (
    <tr>
      <td>{props.product}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
