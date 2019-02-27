import React from 'react';

const FriendsList = ({ friends }) => {
  return (
    <div style={friendsli}>
      {friends.map(friend => (
        <div style={friendsli2} key={friend.id}>
          <h2>Name: {friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      ))}
    </div>
  );
};

const friendsli = {
  width: '70%',
  margin: '0 auto',
  padding: '5px 10px',
  border: '1px solid black',
  display: 'flex',
  flexWrap: 'wrap'
};
const friendsli2 = {
  width: '30%',
  margin: '10px auto',
  padding: '0 10px',
  border: '1px solid black',
  backgroundColor: 'rgba(107, 185, 240, .4)',
  color: 'white',
  fontWeight: 'bold'
};

export default FriendsList;
