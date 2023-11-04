import { RandomColor } from 'components/Profile/RandomColor/RandomColor';
import { Title, Container, List, Span } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} style={{ backgroundColor: RandomColor() }}>
              <Span>{label}</Span>
              <Span>{percentage}%</Span>
            </li>
          );
        })}
      </List>
    </Container>
  );
}
