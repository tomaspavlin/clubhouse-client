import * as React from 'react';
import BigHeader from './ui/BigHeader';
import User from './User';

export default class OnlineFriends extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      clubs: [],  // Currently not used
      users: []
    }
  }

  async fetchOnlineFriends(){
    let res = await fetch("http://localhost:9000/online-friends")
    res = await res.json()
    const { clubs, users } = res
    console.log(res)
    this.setState({clubs, users})
  }

  componentDidMount() {
    this.fetchOnlineFriends();
  }

  render() {
    return (
      <React.Fragment>

        <BigHeader>
          Online Friends
        </BigHeader>

        {this.state.users.map(user => (
            <User key={user.user_id} user={user} />
          )
        )}

      </React.Fragment>
    );
  }
}
