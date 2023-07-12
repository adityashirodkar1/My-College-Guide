import { React , useEffect , useState } from 'react'

export default function Events() {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    const response = await fetch('http://localhost:5000/api/events', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json.data)
    setEvents(json.data)
    console.log(`events`)
    console.log(events)
  }

  useEffect(() => {
    fetchEvents()
  },[])

  return (
    <>
      <div className='container'>
        <div>
          <h2>Events</h2>
        </div>
        <div className='events'>
          <button>ALL</button>
          <button >Techincal</button>
          <button>Cultural</button>
          <button>Fun</button>
          <a href="/eveReg">Register</a>
          {/* {events.map((event) => {
            return event.title;
          })} */}
        </div>
      </div>
    </>
  )
}
