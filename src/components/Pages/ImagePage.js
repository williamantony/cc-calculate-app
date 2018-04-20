import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class ImagePage extends Component {
  state = {
    currentIndex: 0,
    images: [
      'http://openaccess.cvtisr.sk/wp-content/uploads/2016/12/cc.large_-300x300.png',
      'http://elearningbrothers.com/wp-content/uploads/2015/04/royaltyFree.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Free_music.svg/220px-Free_music.svg.png'
    ]
  }
  handleImageRotation = () => {
    this.setState({
      currentIndex: Math.floor(Math.random()*this.state.images.length)
    })
  }

  render() {
    return (
      <div className="ImagePage">
        <img src={this.state.images[this.state.currentIndex]} style={{ 'height': 'auto', 'width': '300px' }}/>

        <button onClick={ this.handleImageRotation.bind(this) }>Change Image</button>
      </div>
    );
  }

}

export default withRouter(ImagePage);
