import React from "react";
import Profile from "../Profile/Profile";
import { username, tag, location, avatar, stats } from "../../data/user.json";
import Statistics from "../Statistics/Statistics";
import statistics from "../../data/statistics.json";
import FriendList from "../FriendList/FriendList";
import friends from "../../data/friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../data/transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
