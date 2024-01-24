import { useState } from 'react';
import './App.css';
import TrackList from './Components/TrackList';
import { Input } from "@mui/material";
import PlayBar from './Components/PlayBar';
import TracksList from './TracksList';

function App() {
  const [tracks, setTracks] = useState(TracksList);
  
  const runSearch = (query) => {
    if (!query) {
      return TracksList;
    }

    const lowerCaseQuery = query.toLowerCase();
    return TracksList.filter((track) => track.title.toLowerCase().includes(lowerCaseQuery) || track.artist.toLowerCase().includes(lowerCaseQuery));
  };

  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className="App">
      <Input className='inpmui' placeholder='Search Tracks' onChange={handleChange} />  
      <TrackList tracks={tracks} />
      <PlayBar />
    </div>
  );
}

export default App;
