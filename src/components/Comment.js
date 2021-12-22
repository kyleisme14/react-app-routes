import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-footer" style={{marginLeft: '20px', paddingTop: '10px'}}>
              <div className="columns is-mobile">
                <div className="column is-11">
                  <div className="field">
                    <div className="control">
                      <p className="is-small">{this.props.message} by {this.props.username} - {String(new Date())}</p>
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
        );
    }
}

export default Comment;