import { React } from 'react';
import ComEveBtn from './ComEveBtn';

export default function ComEvents(props) {

  return (
    <div id='events'>
      <h1>Events</h1>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
        {props.events.map((event) => {
          return <ComEveBtn name = {event}/>
        })}
      </div>
    </div>
  )
}
