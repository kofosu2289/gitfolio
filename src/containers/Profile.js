import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
    }
  }

  async componentDidMount() {
    const profile = await fetch('https://api.github.com/users/kofosu2289');
    const profileJSON = await profile.json();

    if (profileJSON) {
      this.setState({
        data: profile.json,
        loading:false,
      })
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Profile;