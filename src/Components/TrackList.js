import React from 'react'
import Track from './Track'

export default function TrackList({tracks}) {
  return (
    <div className='TrackList'>
    {
       tracks.map((track)=>{
            return(
                <Track key={track.id} track={track}/>
            )
        })
    }
    </div>
  )
}
