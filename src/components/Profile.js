import * as React from 'react';
import { Box, Button, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { selectProfile } from '../store/user';

class Profile extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Box m={2}>
        <Typography variant="h2">
          Profile
        </Typography>

        <Button variant="contained"
                color="primary"
                onClick={() => this.props.fetchProfile()}>
          Show profile
        </Button>

        <Paper>
          <Box m={2}>
            {this.props.profile ? (
              <React.Fragment>
                <Typography variant="h4">
                  {this.props.profile.user_profile.name}
                </Typography>
                <Typography variant="p">
                  {this.props.profile.user_profile.username} /
                  Invites: {this.props.profile.num_invites} /
                  user_id: {this.props.profile.user_id}
                </Typography>
              </React.Fragment>
            ) : (
              <span></span>
            )}
          </Box>
        </Paper>
      </Box>
    );
  }
}

/* Way how to map redux functionality to class component
*  In function components we use useSelector and useDispatch resp instead
*  This maps state selectors and state dispatches resp to props */
export default connect(state => ({
  profile: selectProfile(state)
}), {
})(Profile);
