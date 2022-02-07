import React from 'react';
import MarketItem from './MarketItem';
import styled from 'styled-components';

const TableStyle = styled.table`
  border: 1px solid #000000;
  thead tr th {
    border: 1px solid #000000;
  }

  tbody tr td {
    border: 1px solid #000000;
  }
`;

function MarketList(){
  return (
    <TableStyle table>
      <thead>
        <tr>
          <th>이름</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        <MarketItem />
      </tbody>
    </TableStyle>
  );
}

export default MarketList;