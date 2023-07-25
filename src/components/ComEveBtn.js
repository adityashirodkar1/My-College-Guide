import React from 'react'

export default function ComEveBtn(props) {
  return (
    <div id={props.name.name}>
      <a href={`/eveReg/${props.name.eventId}`}><button className='btn btn-success' style={{height: "100px", width: "150px"}}>{props.name.name}</button></a>
    </div>
  )
}
