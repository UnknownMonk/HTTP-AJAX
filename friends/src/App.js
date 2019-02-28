import React, { Component } from 'react';
import FriendsList from './component/FriendsList';
import Form from './component/Form';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ''
      },
      isUpdating: false
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        newFriend: {
          ...prevState.newFriend,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  addItem = () => {
    const NewFriend = this.state.newFriend;
    axios
      .post('http://localhost:5000/friends', NewFriend)
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  };

  deleteFriend = friendId => {
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  };

  upDateFriend = () => {
    const NewFriend = this.state.newFriend;
    const friendId = this.state.newFriend.id;

    axios
      .put(`http://localhost:5000/friends/${friendId}`, NewFriend)
      .then(res =>
        this.setState({
          friends: res.data,
          isUpdating: false
        })
      );
  };

  upDateItem = friend => {
    this.setState({
      newFriend: friend,
      isUpdating: true
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.isUpdating) {
      this.upDateFriend();
    } else {
      this.addItem();
    }
  };
  render() {
    return (
      <div className="App">
        <FriendsList
          deleteFriend={this.deleteFriend}
          friends={this.state.friends}
          upDateItem={this.upDateItem}
        />
        <Form
          handleSubmit={this.handleSubmit}
          addItem={this.addItem}
          handler={this.handleChanges}
          newFriend={this.state.newFriend}
          isUpdating={this.state.isUpdating}
          updateFriend={this.updateFriend}
        />
      </div>
    );
  }
}

export default App;
