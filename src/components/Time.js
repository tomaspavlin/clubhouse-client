import * as React from 'react';

class Time extends React.Component {
  constructor (props) {
    super(props)
    this.state = { remaining: 0, is_started: false};
  }

  _twoDigits(number) {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
  }

  componentDidMount() {
    const time = Date.parse(this.props.time)

    const tick = () => {
      const now = Date.now()
      const ms = time - now
      const is_started = ms <= 0
      const seconds = Math.floor( Math.abs(ms) / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)

      this.setState({
        remaining: `${this._twoDigits(hours)}:${this._twoDigits(minutes%60)}:${this._twoDigits(seconds%60)}`,
        is_started: is_started
      })
    }

    this.timer = setInterval(tick, 1000);
    tick()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <span title={this.props.time}>
        {this.state.is_started ? 'Started before ' : 'Starts in '}
        {this.state.remaining}
      </span>
    );
  }
}

export default Time;
