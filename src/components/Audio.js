import * as React from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

class Audio extends React.Component {
  constructor (props) {
    super(props)

    const options = {
      mode: 'rtc',
      codec: 'vp8'
    }
    this.agoraClient = AgoraRTC.createClient(options)

    this.agoraKey = '938de3e8055e42b281bb8c6f69c21f78' // from clubhouse-api
  }

  componentDidMount() {
    this.start(this.props.channelCode, this.props.token)
  }

  componentWillUnmount() {
    this.stop()
  }

  async start(channelId, channelToken) {
    console.log("Connecting to audio stream using agora with parameters:")
    console.log([this.agoraKey, channelId, channelToken, this.props.userId])

    try {
      await this.agoraClient.join(
        this.agoraKey, channelId, channelToken, this.props.userId
      )
    } catch (e) {
      console.error("Error occured when joining the audio stream:");
      console.error(e);
      this.props.onError(e);
    }

    this.agoraClient.on("user-published", async (user, mediaType) => {
      await this.agoraClient.subscribe(user, mediaType);
      if (mediaType === "audio") {
        user.audioTrack.play();
      }
    });
  }

  async stop() {
    console.log("Leaving audio stream")
    await this.agoraClient.leave()
  }

  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default Audio;
