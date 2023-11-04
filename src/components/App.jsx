import user from '../AllDataPackedj/user.json';
import dataStat from '../AllDataPackedj/data.json';
import friends from '../AllDataPackedj/friends.json';
import transactionsHis from '../AllDataPackedj/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: ' 20px 0',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={dataStat} />
      {/* <Statistics stats={dataStat} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactionsHis} />
    </div>
  );
};
