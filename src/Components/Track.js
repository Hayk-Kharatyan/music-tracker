import React, { useContext } from 'react'
import SecondsToMMSS from '../Utils/SecondsToMMSS'
import { AudoiContext } from './Context/AudioContext'
export default function Track({track}) {
    const {handleToggleAudio ,isPlaying,currentTrack} = useContext(AudoiContext)
    const formatedDuration = SecondsToMMSS(track.duration)
    const isCurrentTrack = currentTrack.id === track.id
  return (
    <div className={`Track ${isCurrentTrack && "active"}`}>
        <button onClick={() => handleToggleAudio(track)} style={{fontSize:"23px"}} className={`btn-track ${isCurrentTrack && isPlaying ? "icon-pause2" : "icon-play3"}`}></button>
        <img style={{borderRadius:"15px"}} width="50px" height="50px" src={track.img}></img>
        <div className='info'>
         
            <p className='track-artist'>{track.artist}</p>
      
      <p className='track-title'>{track.title}</p>
        </div>


      <p className='track-duration'>{formatedDuration}</p>
      <p>{track.id}</p>
    </div>
  )
}
