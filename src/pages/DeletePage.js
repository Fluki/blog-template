//TODO refesh nakon delete
import React, { Component } from 'react';

import { BACKEND_URL } from '../constants.js';

class DeletePage extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      deleted: false,
    };
  }

  componentDidMount() {
    fetch(`${BACKEND_URL}`).then((response) =>
      response.json().then((data) =>
        this.setState({
          loaded: true,
          posts: data,
        })
      )
    );
  }

  onDeleteClick(id) {
    fetch(`${BACKEND_URL}/delete/${id}`).then((response) => {
      this.setState({ deleted: true }, () => {
        console.log(this.state);
      });
    });
  }

  render() {
    if (this.state.loaded === false) {
      return <h1>Component is loading</h1>;
    } else {
      return (
        <div>
          {this.state.posts.map((post) => {
            return (
              <div>
                <h1>{post.title}</h1>
                <button onClick={() => this.onDeleteClick(post.id)}>
                  Delte Post
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default DeletePage;
