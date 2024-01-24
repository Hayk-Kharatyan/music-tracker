import { createContext, useState } from "react";
import TracksList from "../../TracksList";

const audio = new Audio()

export const AudoiContext = createContext({})

const AudoiProvider = ({children}) => {
    const [currentTrack,setCurrentTrack] = useState(TracksList[0])
    const [isPlaying,setPlaying] = useState(false)

const handleToggleAudio = (track) => {
    if (currentTrack.id !== track.id) {
        audio.src = track.musicSrc;
        audio.currentTime = 0;
        setCurrentTrack(track);
        setPlaying(true);
        audio.play();
    } else {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!isPlaying);
    }
};

    const value = {audio,currentTrack,isPlaying,handleToggleAudio}

    return <AudoiContext.Provider value={value}>{children}</AudoiContext.Provider>
}

export default AudoiProvider