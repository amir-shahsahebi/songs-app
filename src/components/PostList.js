import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchPost();
  }
  render() {
    return <div>Post List</div>;
  }
}

// const mapStatetoProps = (state) => {
//   return {

//   };
// };

export default connect(null, { fetchPosts })(PostList);
