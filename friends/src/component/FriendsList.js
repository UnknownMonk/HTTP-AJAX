import React from 'react';

const FriendsList = ({ upDateItem, friends, deleteFriend }) => {
  return (
    <div style={friendsli}>
      {friends.map(friend => (
        <div style={friendsli2} key={friend.id}>
          <h2>Name: {friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
          <button style={btn} onClick={() => deleteFriend(friend.id)}>
            x
          </button>
          <button style={btn} onClick={() => upDateItem(friend)}>
            update
          </button>
        </div>
      ))}
    </div>
  );
};

const btn = {
  margin: '3px',
  backgroundColor: 'salmon',
  borderStyle: 'none',
  color: 'white',
  cursor: 'pointer'
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
