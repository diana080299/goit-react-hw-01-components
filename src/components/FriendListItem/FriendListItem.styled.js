import styled from 'styled-components';

const Online = styled.span`
  &::before {
    content: '•';
    color: green;
    margin-right: 20px;
    font-size: 80px;
  }
`;
const Ofline = styled.span`
  &::before {
    content: '•';
    color: red;
    margin-right: 20px;
    font-size: 80px;
  }
`;

const List = styled.li`
  display: flex;
`;
const Img = styled.img`
  width: 48px;
`;

const Name = styled.p`
  font-size: 25px;
  align-self: center;
  margin-left: 15px;
`;

export { Online, Ofline, List, Img, Name };
