import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../Friend-list/FriendList';
import { TransactionHistory } from '../Transaction-history/TransactionHistory';
import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../Friend-list/friends.json';
import transactions from '../Transaction-history/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      {/*-------- 1 - Social network profile --------*/}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/*-------- 2 - Statistics section -------------*/}
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      {/*-------- 3 - List of friends ----------------*/}
      <FriendList friends={friends} />
      {/*-------- 4 - History of transactions --------*/}
      <TransactionHistory items={transactions} />
    </Container>
  );
};
