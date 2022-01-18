import React, { Component } from 'react';
import { BACKEND_URL } from '../constants.js';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', image: '', loaded: false };

    this.handleChange = this.handleChangeTitle.bind(this);
    this.handleChange = this.handleChangeDescription.bind(this);
    this.handleChange = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeImage(event) {
    this.setState({ image: event.target.value });
  }

  handleSubmit(event) {
    fetch(`${BACKEND_URL}/update/${this.state.id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(this.state),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });

    console.log(this.state);
    let jsonString = JSON.stringify(this.state);
    console.log(jsonString);
    event.preventDefault();
  }

  componentDidMount() {
    fetch(`${BACKEND_URL}/blogs/${this.props.id}`)
      .then((response) => {
        response.json().then((data) => {
          //TODO Srediti fejlovanje
          // vraca niz sa jedim elementom
          if (data.length === 0) {
            this.setState({ isFailed: true });
          } else {
            this.setState({
              loaded: true,
              title: data[0].title,
              description: data[0].description,
              image: data[0].image,
              id: data[0].id,
            });
          }
        });
      })
      .catch((err) => {
        this.setState({ isFailed: true });
        console.log(err);
      });
  }

  render() {
    if (this.state.loaded === false) {
      return <h1>Page is loading</h1>;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={this.state.title}
              onChange={(event) => this.handleChangeTitle(event)}
            />
          </label>

          <label>
            Description:
            <input
              type="text"
              value={this.state.description}
              onChange={(event) => this.handleChangeDescription(event)}
            />
          </label>

          <label>
            Image:
            <input
              type="text"
              value={this.state.image}
              onChange={(event) => this.handleChangeImage(event)}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
}

export default Update;
