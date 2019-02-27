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
      }
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
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
        <Form
          addItem={this.addItem}
          handler={this.handleChanges}
          newFriend={this.state.newFriend}
        />
      </div>
    );
  }
}

export default App;
