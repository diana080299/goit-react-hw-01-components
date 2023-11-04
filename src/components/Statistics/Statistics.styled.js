import styled from 'styled-components';

const Title = styled.h2`
  padding: 15px;
  font-size: 20px;
  text-align: center;
`;

const Container = styled.div`
  border-radius: 3px;
  border: 2px solid white;
  padding: 10px;
  margin: 0 auto;
  display: block;
  width: 250px;
  background-color: lightblue;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Span = styled.span`
  font-size: 15px;
  display: flex;
  align-items: center;
  padding: 5px;
`;

export { Title, Container, List, Span };
