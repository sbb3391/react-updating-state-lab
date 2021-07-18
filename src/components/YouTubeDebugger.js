// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleClickBitrate = () => {
    let bitrate = this.state.settings.bitrate
    console.log("bitrate", bitrate)

    function getNewBitrate() {
      return bitrate === 8 ? 12 : 8 
    } 

    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: getNewBitrate()
      }
    })
  }

  handleClickResolution = () => {
    let resolution = this.state.settings.video.resolution
    
    function getNewResolution() {
      return resolution === '1080p' ? '720p' : '1080p'
    }

    console.log([...this.state.settings])

    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: getNewResolution()
        }
      }
    })
  }

  // handleClick = (e) => {
  //   const key = e.target.name;
    
  //   console.log("state", this.state);

  //   this.setState(recursiveSearch(key, this.state))

  //   recursiveSearch = (searchKey, object) => {
  //     Object.keys(obj).forEach(key => {
  //       const value = object[key]
  //       if (key == searchKey && typeof value !== 'object') {
  //         return {key: value}
  //       } else if (typeof value == 'object') {

  //       }
  //     })
  //   }
  // }

  render() {

    return (
      <div>
        <button className="bitrate" name="bitrate" onClick={this.handleClickBitrate}>{this.state.settings.bitrate}</button>
        <button className="resolution" name="resolution" onClick={this.handleClickResolution}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}

export default YouTubeDebugger;