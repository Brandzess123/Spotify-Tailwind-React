import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import Playing from "./components/Playing";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0])   //song = object[0];

  const handleSetSong = (idSong) => {         //truyền hàm handlesetsong vào  
    const song = DataSongs.find(song => song.id === idSong)  //nếu tìm thấy bài hát -> chọn
    
    if(!song)  //nếu nó không undefied -> thì chạy hàm này
           setSong(DataSongs[0])
    else
           setSong(song) //nếu không thì setsong = bài hát đầu tiên 
  }

  
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong}}>   
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSongs />
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
