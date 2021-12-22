import React, { Component } from 'react';

class Character extends Component {
    constructor(props) {
      super(props);
      this.state = {
        character: 'Gohan',
        likes: 1,
        comments: [
          {
            message: 'This is my favorite anime',
            username: '@romebell',
            date: String(new Date())
          }
        ]
      }
    }

    handleCharacter() {
      this.setState({
        character: 'Goku'
      });
    }

    handleLike() {
      this.setState({
        likes: this.state.likes + 1
      });
    }

    handleComment = (e) => {
      e.preventDefault();
      let messageValue = e.target.value;

      this.setState({
        message:messageValue
      });
      }

    handleSubmit = (e) => {
      e.preventDefault();
      let commentValue = e.target.value;
      let username = '@romebell';
      let newComment = {
        commentValue,
        username
      }
      // make a copy comments
      const commentArray = this.state.comments.slice();
      // push the newComment inside the array
      commentArray.push(newComment);

      this.setState({
        comments: commentArray
      })
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
                  <p className="subtitle is-6">{this.state.character}</p>
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
                    <span>
                      <i onClick={this.handleLike.bind(this)} className="material-icons">favorite_border</i>
                    </span>
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
                  <strong>{this.state.likes} Likes</strong>
                </p>
                {this.props.caption} 
                <a>{this.props.user}</a>.<a href="#">#{this.props.tags[0]}</a>
                <a href="#">#{this.props.tags[1]}</a>
                <br />
                <time datetime="2018-1-1">{this.props.date}</time>
                <button onClick={this.handleCharacter.bind(this)}>Update Character</button>
              </div>
            </div>
            <div className="card-footer" style={{marginLeft: '20px', paddingTop: '10px'}}>
              <div className="columns is-mobile">
                <div className="column is-11">
                  <div className="field">
                    <div className="control">
                      <p className="is-small">{'This is my favorite anime'} by {'@romebell'} - {String(new Date())}</p>
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
            <div className="card-footer">
              <div className="columns is-mobile">
                <div className="column is-11">
                  <div className="field">
                    <div className="control">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        
                        <input
                        className="input is-medium"
                        type="text"
                        placeholder="Add a comment . . ."
                        value={this.state.message}
                        onChange={this.handleComment.bind(this)}
                      />
                      </form>
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