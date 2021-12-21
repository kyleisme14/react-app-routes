import React, { Component } from 'react';

class Character extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className="card">
            <div className="header">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src="https://source.unsplash.com/random/96x96"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{this.props.title}</p>
                  <p className="subtitle is-6">{this.props.creator}</p>
                </div>
              </div>
            </div>
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={this.props.imageUrl}
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="level is-mobile">
                <div className="level-left">
                  <div className="level-item has-text-centered">
                    <a href="">
                      <i className="material-icons">favorite_border</i>
                    </a>
                  </div>
                  <div className="level-item has-text-centered">
                    <div>
                      <a href="">
                        <i className="material-icons">chat_bubble_outline</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <p>
                  <strong>32 Likes</strong>
                </p>
                {this.props.caption} 
                <a>{this.props.user}</a>.<a href="#">#{this.props.tags[0]}</a>
                <a href="#">#{this.props.tags[1]}</a>
                <br />
                <time datetime="2018-1-1">{this.props.date}</time>
              </div>
            </div>
            <div className="card-footer">
              <div className="columns is-mobile">
                <div className="column is-11">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        placeholder="Add a comment . . ."
                      />
                    </div>
                  </div>
                </div>
                <div className="column has-text-centered">
                  <button className="button">
                    <i className="material-icons">more_horiz</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Character;
