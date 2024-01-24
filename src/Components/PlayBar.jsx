import { useContext, useState, useEffect } from "react"
import { AudoiContext } from "./Context/AudioContext"
import { Slider } from "@mui/material"
import SecondsToMMSS from "../Utils/SecondsToMMSS"

const PlayControls = () => {
    const { audio , currentTrack } = useContext(AudoiContext)
    const [currentTime, setCurrentTime] = useState(0)
    const { duration } = currentTrack

    const formattedCurrentTime = SecondsToMMSS(currentTime)

    const sliderCurrentTime = Math.round((currentTime / duration) * 100)

    const handleChangCurrentTime = (_, value) => {
        const time = Math.round((value / 100) * duration)
        setCurrentTime(time)
        audio.currentTime = time
    }

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(audio.currentTime)
        }, 1000)

        return () => {
            clearInterval(timeInterval)
        }
    }, [])

    return (
        <>
        <p>{formattedCurrentTime}</p>
            <Slider step={1} min={0} max={100} value={sliderCurrentTime} onChange={handleChangCurrentTime} />
        </>
    )
}

const PlayBar = () => {


    const { currentTrack, isPlaying, handleToggleAudio } = useContext(AudoiContext)

    const { title, artists, duration } = currentTrack

    const formattedDuration = SecondsToMMSS(duration)

    return <div className="playbar">
        <button onClick={() => handleToggleAudio(currentTrack)} style={{ fontSize: "23px" }} className={ `btn-track ${isPlaying ? "icon-pause2" : "icon-play3"}`}></button>
        <div className="credits">
            <h4>{title}</h4>
            <p>{artists}</p>
        </div>
        <div className="slider">
            <PlayControls/>
            <p>{formattedDuration}</p>
        </div>
    </div>

}

export default PlayBar