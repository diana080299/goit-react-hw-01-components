import styled, { css } from 'styled-components';
const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0px;
  padding: 12px;
  background-color: lightblue;
  margin-top: 10px;
  text-align: center;
  width: 600px;
`;

const Th = styled.th`
  border: 2px solid white;
  font-size: 30px;
  background-color: lightskyblue;
`;
const Td = styled.td`
  border: 2px solid white;
  text-align: center;
  font-size: 23px;
`;
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: lightsteelblue;
  }
`;

export { Table, Th, Td, Tr };
