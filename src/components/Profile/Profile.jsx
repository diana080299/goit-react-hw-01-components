import {
  Container,
  Img,
  Text,
  Span,
  Stat,
  List,
  Block,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <Container>
        <Img src={avatar} alt="User avatar" />
        <Text>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Container>

      <List>
        <Block>
          <Span>Followers</Span>
          <Stat>{followers}</Stat>
        </Block>
        <Block>
          <Span>Views</Span>
          <Stat>{views}</Stat>
        </Block>
        <Block>
          <Span>Likes</Span>
          <Stat>{likes}</Stat>
        </Block>
      </List>
    </div>
  );
};
