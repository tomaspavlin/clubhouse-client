import * as React from 'react';
import Channel from './Channel';

class Channels extends React.Component {
  constructor (props) {
    super(props)
    this.state = { channels: []};
  }

  async getChannels() {
    let res = await fetch("http://localhost:9000/channels")
    res = await res.json()
    const channels = res.channels
    this.setState({ channels: channels })
  }

  render() {
    return (
      <div className="channels">
        <h1>Channels</h1>
        <button onClick={() => this.getChannels()}>Refresh channels</button>
        <ul>
          {this.state.channels.map(ch => (
            <div>
              <h2>{ch.topic}</h2>
              {ch.num_speakers}/{ch.num_all} {ch.is_explore_channel ? 'explore' : 'non-explore'}
              <i> - {ch.channel}</i>
              <Channel channelCode={ch.channel}/>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Channels;
