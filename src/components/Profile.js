import * as React from 'react';
import { Box, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { selectProfile } from '../store/user';
import BigHeader from './ui/BigHeader';
import SimpleCard from './ui/SimpleCard';

class Profile extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Box m={2}>

        <BigHeader>
          Profile
        </BigHeader>

        <SimpleCard>
          <Box m={2}>
            {this.props.profile ? (
              <React.Fragment>
                <Typography variant="h4">
                  {this.props.profile.user_profile.name}
                </Typography>
                <Typography color="textSecondary" paragraph>
                  {this.props.profile.user_profile.username} |
                  invites: {this.props.profile.num_invites} |
                  user_id: {this.props.profile.user_profile.user_id}
                </Typography>
              </React.Fragment>
            ) : (
              <span></span>
            )}
          </Box>
        </SimpleCard>
      </Box>
    );
  }
}

/* Way how to map redux functionality to class component
*  In function components we use useSelector and useDispatch resp instead
*  This maps state selectors and state dispatches resp to props */
export default connect(state => ({
  profile: selectProfile(state)
}))(Profile);
