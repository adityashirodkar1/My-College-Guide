import React from 'react'

export default function ComEveBtn(props) {
  return (
    <div id={props.name}>
      <button className='btn btn-success' style={{height: "100px", width: "150px"}}>{props.name}</button>
    </div>
  )
}
