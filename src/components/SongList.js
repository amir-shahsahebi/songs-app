import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>Song List</div>;
  }
}

export default connect()(SongList); // connect() ====> return a function and () ======> invoke the function that returned
