// Action creator
export const selectSong = (song) => {
  //return an action
  return {
    type: "SONG_SELECTED", // a type must required for actions
    payload: song,
  };
};
