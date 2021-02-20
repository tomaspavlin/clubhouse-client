import * as React from 'react';

class Events extends React.Component {
  constructor (props) {
    super(props)
    this.state = { profile: undefined};
  }

  async getProfile() {
    let res = await fetch("http://localhost:9000/profile")
    res = await res.json()
    this.setState({ profile: res })
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <ul>
          {this.state.profile ? (
            <div>
              <h2>{this.state.profile.user_profile.name}</h2>
              <p>
                {this.state.profile.user_profile.username} /
                Invites: {this.state.profile.num_invites} /
                user_id: {this.state.profile.user_id}
              </p>
            </div>
          ) : (
            <button onClick={() => this.getProfile()}>Show profile</button>
          )}
        </ul>
      </div>
    );
  }
}

export default Events;
