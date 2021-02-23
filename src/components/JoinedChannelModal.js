import * as React from 'react';
import { connect } from 'react-redux';
import { leaveChannel, selectIsModalOpened, selectJoinedChannel } from '../store/channels';
import { Avatar, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Tooltip, withStyles } from '@material-ui/core';
import Audio from './Audio';
import Typography from '@material-ui/core/Typography';
import UsersAvatars from './UsersAvatars';

const styles = () => ({
  // Not used now but it can be handy later
});

class JoinedChannelModal extends React.Component {
  handleClose = () => {
    this.props.leaveChannel()
  };

  render() {
    const { classes } = this.props; // Not used now but it can be handy later

    const openedModal = (
     <React.Fragment>
       <Dialog onClose={this.handleClose}
               open={this.props.isModalOpened}
               fullWidth={true}
               maxWidth="sm">
         {this.props.channel ? (

           <React.Fragment>
             <DialogTitle onClose={this.handleClose}>
               {this.props.channel.club_name ? (
                 <Typography color="textSecondary">
                   {this.props.channel.club_name} 🏠
                 </Typography>
               ) : ''}
               {this.props.channel.topic}
               <Typography color="textSecondary">
                 {this.props.channel.users.length} users |{' '}
                 <a href={this.props.channel.url} target="_blank">Open in official Clubhouse</a>
               </Typography>

             </DialogTitle>
             <DialogContent dividers>

               <Typography color="textSecondary" gutterBottom>
                 Speakers
               </Typography>
               <UsersAvatars users={this.props.channel.users.filter(user => user.is_speaker).slice(0, 18)} />

               <Divider />

               <Typography color="textSecondary" gutterBottom>
                 Other users
               </Typography>
               <UsersAvatars users={this.props.channel.users.filter(user => !user.is_speaker).slice(0, 9)} />

               <Audio channelCode={this.props.channel.channel} token={this.props.channel.token} />

             </DialogContent>
           </React.Fragment>

         ) : (

           <DialogContent dividers>
            <CircularProgress />
           </DialogContent>

         )}

         <DialogActions>
           <Button autoFocus onClick={this.handleClose} color="primary">
             ✌️Leave silently
           </Button>
         </DialogActions>

       </Dialog>
     </React.Fragment>
   )

    return (
      <React.Fragment>
        {this.props.isModalOpened ? openedModal : ''}
      </React.Fragment>
    );
  }
}

/* This would be used for class component redux binding */
/* Way how to map redux functionality to class component
*  In function components we use useSelector and useDispatch resp instead
*  This maps state selectors and state dispatches resp to props */
export default withStyles(
  styles, { withTheme: false }
  )(
    connect(state => ({
      channel: selectJoinedChannel(state),
      isModalOpened: selectIsModalOpened(state),
    }), {
      leaveChannel
    })(JoinedChannelModal)
);
