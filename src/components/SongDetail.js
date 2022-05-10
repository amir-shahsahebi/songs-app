import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongDetail = (props) => {
  //we need a functional component to work with "connect"
  console.log(props);
  return (
    <div className="">
      <div className="">Song Detail</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectSong };
};

export default connect(mapStateToProps)(SongDetail);
