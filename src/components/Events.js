import * as React from 'react';
import Channel from './Channel';
import Time from './Time';

class Events extends React.Component {
  constructor (props) {
    super(props)
    this.state = { events: []};
  }

  async getEvents() {
    let res = await fetch("http://localhost:9000/events")
    res = await res.json()
    this.setState({ events: res.events })
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
        <button onClick={() => this.getEvents()}>Refresh events</button>
        <ul>
          {this.state.events.map(e => (
            <div>
              <h2>{e.name}</h2>
              <p>
                <Time time={e.time_start}/>
              </p>
              Hosts: {e.hosts.length} {e.descriptoin} {e.is_expired ? 'EXPIRED' : ''} {e.is_member_only ? 'MEMBER ONLY' : ''}
              <i> - {e.channel}</i>
              <Channel channelCode={e.channel}/>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Events;
