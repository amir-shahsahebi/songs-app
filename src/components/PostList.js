import Rect, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostList extends Component {
  componentDidMount() {
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

export default connect(null, { fetchPost })(PostList);
