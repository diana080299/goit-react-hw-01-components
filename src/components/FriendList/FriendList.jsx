import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Container } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Container key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        </Container>
      ))}
    </ul>
  );
};
