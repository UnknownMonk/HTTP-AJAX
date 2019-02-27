import React from 'react';

function Form({ addItem, newFriend, handler }) {
  return (
    <>
      <form style={form}>
        <input
          style={input}
          placeholder="Name"
          name="name"
          value={newFriend.name}
          onChange={handler}
          type="text"
        />
        <input
          style={input}
          placeholder="Age"
          name="age"
          value={newFriend.age}
          onChange={handler}
          type="number"
        />
        <input
          style={input}
          placeholder="Email"
          name="email"
          value={newFriend.email}
          onChange={handler}
          type="text"
        />
        <button style={button} type="submit" onClick={addItem}>
          Add Friend
        </button>
      </form>
    </>
  );
}
const button = {
  margin: '10px auto',
  width: '30%',
  backgroundColor: '#AEC6CF',
  borderStyle: 'none',
  fontSize: '20px',
  padding: '10px'
};
const input = {
  width: '80%',
  height: '100%',
  textAlign: 'center',

  margin: '10px auto',
  borderStyle: 'none',
  borderBottom: '1px dashed black',
  padding: '10px',
  outline: 'none',
  fontSize: '20px',
  backgroundColor: 'rgba(255, 255, 255, .5)'
};
const form = {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',

  margin: '30px auto'
};
export default Form;
