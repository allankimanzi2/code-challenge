import React from 'react';

function Transaction({ date, description, amount }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
