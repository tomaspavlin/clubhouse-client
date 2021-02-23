import * as React from 'react';
import { connect } from 'react-redux';
import Audio from './Audio';

class JoinedChannel extends React.Component {
  constructor (props) {
    super(props)
    console.assert(props.channel !== undefined);
  }

  render() {
    return (
      <React.Fragment>
        <h4>Topic: {this.props.channel.topic}</h4>
        <h4>Club: {this.props.channel.club_name}</h4>
        <a href={this.props.channel.url}>{this.props.channel.url}</a>
        <div>
          Users: {this.props.channel.users.length}
        </div>
        <Audio channelCode={this.props.channel.channel} token={this.props.channel.token} />
      </React.Fragment>
    );
  }
}

/* This would be used for class component redux binding */
/* Way how to map redux functionality to class component
*  In function components we use useSelector and useDispatch resp instead
*  This maps state selectors and state dispatches resp to props */
export default connect(state => ({
}), {
})(JoinedChannel);

