import styled from 'styled-components';

const Container = styled.div`
  border-radius: 3px;
  border: 2px solid white;
  padding: 10px;
  margin: 0 auto;
  display: block;
  width: 250px;
  background-color: lightblue;
`;
const Block = styled.li`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 180px;
  padding-top: 50px;
  margin: auto;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-top: 15px;
`;
const Span = styled.span`
  font-size: 16px;
`;

const Stat = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  border: 2px solid white;
  padding: 10px;
  background-color: lightblue;
`;

export { Container, Img, Text, Span, Stat, List, Block };
