import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  // state is all data inside of redux store
  return { songs: state.songs }; // we need song key value here
  // return state;
};

export default connect(mapStateToProps, { selectSong })(SongList); // connect() ====> return a function and () ======> invoke the function that returned ==> the connect make props og this component connected with redux
// {selectSong: selectSong} ==> { selectSong } selectSong is an action here that we pass to the this.props in SongList class and its like store.dispatch() in codepen to understanding redux that we have an action creator
// when ever we want to call an action, we must write it on connect function as second argument as an obj but because features of es7 we can write simple form like { selectSong } instead of {selectSong: selectSong}
