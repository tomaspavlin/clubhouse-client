import * as React from 'react';
import { connect } from 'react-redux';
import { leaveChannel, selectIsModalOpened, selectJoinedChannel } from '../store/channels';
import JoinedChannel from './JoinedChannel';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

class JoinedChannelModal extends React.Component {
  constructor (props) {
    super(props)
    console.assert(props.channel !== undefined);
  }

  handleClose = () => {
    this.props.leaveChannel()
  };

  render() {
   const openedModal = (
     <React.Fragment>
       <Dialog onClose={this.handleClose}
               open={this.props.isModalOpened}
               fullWidth={true}
               maxWidth="sm">
         <DialogTitle onClose={this.handleClose}>
           Channel
         </DialogTitle>
         <DialogContent dividers>
           {this.props.joinedChannel ? (
             <JoinedChannel channel={this.props.joinedChannel} />
           ) : (
             <CircularProgress />
           )}
         </DialogContent>
         <DialogActions>
           <Button autoFocus onClick={this.handleClose} color="primary">
             Leave
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
export default connect(state => ({
  joinedChannel: selectJoinedChannel(state),
  isModalOpened: selectIsModalOpened(state),
}), {
  leaveChannel
})(JoinedChannelModal);
