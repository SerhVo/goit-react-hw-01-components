import styled from '@emotion/styled';

export const TableOfTransactionHistory = styled.table`
  width: 700px;
  box-shadow: 2px 2px 8px #000000;
`;

export const TableHead = styled.thead`
  height: 40px;
  font-size: 11px;
  text-transform: uppercase;
  color: #fff;
  background-color: #19e0fa;
`;

export const TableHeadRow = styled.tr``;

export const TableHeadCell = styled.th`
  width: calc(100% / 3);
  :first-of-type {
    text-align: center;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  height: 30px;
  background-color: #ededed;
  :nth-of-type(2n + 1) {
    background-color: #fff;
  }
`;

export const TableCell = styled.td`
  font-size: 12px;
  text-transform: capitalize;
  color: #0000000;
  text-align: center;
  
`;
