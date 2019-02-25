// rfce

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChangeTitle = e => {
    console.log(e.target.name);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlerSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    //   fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "POST",
    //     headers: { "content-type": "application/json" },
    //     body: JSON.stringify(post)
    //   })
    //     .then(result => result.json())
    //     .then(data => console.log(data));
    // };

    // ACTION
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Postform</h1>
        <form onSubmit={this.handlerSubmit}>
          <div>
            <label htmlFor="">Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChangeTitle}
              value={this.state.title}
            />
          </div>

          <br />
          <div>
            <label htmlFor="">Body: </label>
            <br />
            <textarea
              name="body"
              cols="30"
              rows="10"
              onChange={this.onChangeTitle}
              value={this.state.body}
            />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
