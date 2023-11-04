import './FriendListItem.styled';
import {
  Online,
  Ofline,
  List,
  Img,
  Name,
} from '../FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <List key={id}>
      {isOnline ? <Online /> : <Ofline />}
      <Img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </List>
  );
};
