import * as React from 'react';
import Channel from './Channel';
import Time from './Time';
import { connect } from 'react-redux';
import { fetchEvents, selectEvents } from '../store/events';

// This could be function component but we want to have code interesting
class Events extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
        <button onClick={() => this.props.fetchEvents()}>Refresh events</button>
        <ul>
          {this.props.events.map(e => (
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

/* Way how to map redux functionality to class component
*  In function components we use useSelector and useDispatch resp instead
*  This maps state selectors and state dispatches resp to props */
export default connect(state => ({
  events: selectEvents(state)
}), {
  fetchEvents
})(Events);
