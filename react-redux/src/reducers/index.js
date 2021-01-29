const songsReducer = () => {
  return [
    { title: "Gatti", duration: "4:05" },
    { title: "The Woo", duration: "3:13" },
    { title: "Starboy", duration: "6:19" },
    { title: "Dada", duration: "3:21" },
  ];
};

const songSelectedReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
