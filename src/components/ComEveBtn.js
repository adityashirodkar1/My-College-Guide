import React from 'react'



export default function ComEveBtn(props) {
  return (
    <>
      <a href={`/eveReg/${props.name.eventId}`}>
        <button className='buttonhaha my-2'>
          {props.name.name}
          <span class="first"></span>
          <span class="second"></span>
          <span class="third"></span>
          <span class="fourth"></span>
        </button>
      </a>
    </>

  )
}
