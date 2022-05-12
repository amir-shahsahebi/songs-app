import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.post);
    return <div>Post List</div>;
  }
}

// important: whenever we need to grab some data from redux, we must use mapStateToProps function ann put in on connect as first argument
const mapStateToProps = (state) => {
  // state is entire of our store
  return { post: state.post }; // mapStateToProps must return an object and key of that is the key that we crated in reducers
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
