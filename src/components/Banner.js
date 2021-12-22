import React, { Component } from 'react';

class Banner extends Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: 1,
      }
    }


    handleLike() {
      this.setState({
        likes: this.state.likes + 1
      });
    }



    render() {
        return (
            <div className="card">
            
          </div>
        );
    }
}

export default Banner;