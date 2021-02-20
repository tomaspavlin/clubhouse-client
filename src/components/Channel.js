import * as React from 'react';
import Audio from './Audio';

class Channel extends React.Component {
  constructor (props) {
    super(props)
    this.state = { channel: undefined};
  }

  async joinChannel() {
    let res = await fetch(`http://localhost:9000/channels/${this.props.channelCode}/join`)
    res = await res.json()
    const channel = res
    this.setState({ channel: channel })
  }

  async leaveChannel() {
    await fetch(`http://localhost:9000/channels/${this.props.channelCode}/leave`)
    this.setState({ channel: undefined })
  }

  render() {
    return (
      <div>
        {this.state.channel ? (
          <div>
            <button onClick={() => this.leaveChannel()}>Leave</button>
            <h4>Club: {this.state.channel.club_name}</h4>
            <a href={this.state.channel.url}>{this.state.channel.url}</a>
            <div>
              Users: {this.state.channel.users.length}
            </div>
            <Audio channelCode={this.props.channelCode} token={this.state.channel.token} />
          </div>
        ) : (
          <div>
            <button onClick={() => this.joinChannel()}>Join</button>
          </div>
        )}
      </div>
    );
  }
}

export default Channel;
