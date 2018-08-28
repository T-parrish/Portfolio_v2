import React, { Component } from 'react'
import axios from 'axios';
import Photo from './Photo';

import tokens from '../../config/keys';

class PhotoWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    let urlArray = []
    const INSTA_TOKEN = tokens.INSTA_TOKEN

    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${INSTA_TOKEN}`)
      .then(res => {
        res.data.data.map((post, i) => {
          urlArray.push(post.images.standard_resolution.url)
        })
      }).then(() => {
        this.setState({photos: urlArray})
      }).catch((e) => console.log(e))
  }

  render() {
    const photos = this.state.photos.map((photo, i) => {
      return <Photo url={photo} key={i} idx={i} />
    })
    

    return (
      <div className="photos__wrapper">
        {photos}
      </div>
    )
  }
}

export default PhotoWrapper