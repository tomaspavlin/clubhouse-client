import * as React from 'react';
import { connect } from 'react-redux';
import { fetchEvents, selectEvents } from '../store/events';
import Event from './Event';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

// This could be function component but we want to have code interesting
class Events extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Box m={2}>
          <Typography variant="h2">
            Events
          </Typography>
        </Box>

        {this.props.events.map(e => (
          <Box m={2}>
            <Event event={e} />
          </Box>
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
