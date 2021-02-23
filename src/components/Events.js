import * as React from 'react';
import { connect } from 'react-redux';
import { fetchEvents, selectEvents } from '../store/events';
import Event from './Event';
import BigHeader from './ui/BigHeader';

// This could be function component but we want to have code interesting
class Events extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {
    return (
      <React.Fragment>

        <BigHeader>
          Events
        </BigHeader>

        {this.props.events.map(e => (
          <Event event={e} />
          )
        )}

      </React.Fragment>
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
