import { React, useEffect, useState } from 'react'
import EventCard from './EventCard';

export default function Events() {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    const response = await fetch('http://localhost:5000/api/events', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    setEvents(json)
    console.log(events)
  }

  useEffect(() => {
    fetchEvents()
  })

  return (
    <>
      <div className='container'>
        <div>
          <h2>Events</h2>
        </div>
        <div className='events'>
          {/* <a href="/eveReg">Register</a> */}
          <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <div className='haha' style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
              {events.map((event) => {
                return <EventCard event={event} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
