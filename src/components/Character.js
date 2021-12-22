import React, { Component } from "react";

import Comment from './Comment';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: "Gohan",
      likes: 1,
      message: "",
      comments: [
        {
          message: "This is my favorite anime",
          username: "@romebell",
          date: String(new Date()),
        },
      ],
    };
  }

  handleCharacter() {
    this.setState({
      character: "Goku",
    });
  }

  handleLike() {
    this.setState({
      likes: this.state.likes + 1,
    });
  }

  handleComment = (e) => {
    e.preventDefault();
    let messageValue = e.target.value;
    console.log("message", messageValue);

    this.setState({
      message: messageValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let commentValue = this.state.message;
    let username = "@romebell";
    let newComment = {
      message: commentValue,
      username,
    };


    // make a copy comments
    const commentArray = this.state.comments.slice();
    // push the newComment inside the array
    commentArray.push(newComment);

    this.setState({
      comments: commentArray,
      message: ''
    });
  };

  displayComments() {
    const display = this.state.comments.map((c, idx) => {
      return <Comment key={idx} message={c.message} username={c.username} />
    });

    return display; // returns the array with all of the comments
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
                  alt="Placeholder"
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
            <img src={this.props.imageUrl} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="level is-mobile">
            <div className="level-left">
              <div className="level-item has-text-centered">
                <span>
                  <i
                    onClick={this.handleLike.bind(this)}
                    className="material-icons"
                  >
                    favorite_border
                  </i>
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
            <time dateTime="2018-1-1">{this.props.date}</time>
            <button onClick={this.handleCharacter.bind(this)}>
              Update Character
            </button>
          </div>
        </div>
        {/* Comment component will go here */}
        <div
          className="card-footer"
          style={{ marginLeft: "20px", paddingTop: "10px" }}
        >
          <div className="columns is-mobile">
            <div className="column is-11">
              <div className="field">
                <div className="control">
                  <p className="is-small">
                    {"This is my favorite anime"} by {"@romebell"} -{" "}
                    {String(new Date())}
                  </p>
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
        {this.displayComments()}
        {/* one comment above */}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="card-footer">
            <div className="columns is-mobile">
              <div className="column is-11">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Add a comment . . ."
                      value={this.state.message}
                      onChange={this.handleComment.bind(this)}
                    />
                  </div>
                </div>
              </div>
              <div className="column has-text-centered">
                <button type="submit" className="button">
                  <i className="material-icons">more_horiz</i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Character;