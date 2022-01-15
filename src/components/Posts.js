import Post from './Post';
import '../style/Posts.css';
import React, { Component } from 'react';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/').then((response) => {
      response.json().then((data) => {
        this.setState({
          isLoaded: true,
          posts: data,
        });
      });
    });
  }

  render() {
    if (this.state.isLoaded === false) {
      return <h1> Content is loading</h1>;
    } else {
      return (
        <div>
          {this.state.posts.map((test) => {
            return <Post post={test} />;
          })}
        </div>
      );
    }
  }
}

export default Posts;
