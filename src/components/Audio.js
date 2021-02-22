import * as React from 'react';


import AgoraRTC from 'agora-rtc-sdk-ng';
import profileJson from '../profile.json';

class Audio extends React.Component {
  constructor (props) {
    super(props)

    const profile = {}
    profile.token = profileJson.tokens.auth
    profile.userId = profileJson.user.user_id
    profile.deviceId = profileJson.deviceId
    this.profile = profile

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
    console.log([this.agoraKey, channelId, channelToken, this.profile.userId])

    await this.agoraClient.join(
      this.agoraKey, channelId, channelToken, this.profile.userId
    )

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
      <div>
        Audio playing...
      </div>
    );
  }
}

export default Audio;
