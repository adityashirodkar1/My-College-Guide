import { React } from 'react';
import ComEveBtn from './ComEveBtn';

const style = { 
  display: "flex", 
  flexDirection: "row", 
  justifyContent: "space-evenly", 
  alignItems: "center",
  flexWrap: "wrap",
}

export default function ComEvents(props) {

  return (
    <div id='events'>
      <h1>Events</h1>
      <div style={style} className='my-4'>
        {props.events.map((event) => {
          return <ComEveBtn name = {event}/>
        })}
      </div>
    </div>
  )
}
