import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    // console.log(this.props);
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.post);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

// important: whenever we need to grab some data from redux, we must use mapStateToProps function ann put in on connect as first argument
const mapStateToProps = (state) => {
  // state is entire of our store
  // console.log(state);
  return { posts: state.posts }; // mapStateToProps must return an object and key of that is the key that we crated in reducers
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
