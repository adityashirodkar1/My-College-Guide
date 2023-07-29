import { React, useEffect, useState } from 'react'
import EventCard from './EventCard';
import { useParams } from 'react-router-dom';

const ahah = {
  backgroundImage: `url("https://res.cloudinary.com/dc4kfswj7/image/upload/v1690571479/HahaXD/noiseporn-JNuKyKXLh8U-unsplash_sujrva.jpg")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center"
}

export default function Events() {

  const [search, setSearch] = useState("")

  const handleOnChange = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  const filterbysearch = async () => {
    const response = await fetch(`http://localhost:5000/api/events/name/${search}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    setEvents(json)
  }

  const [events, setEvents] = useState([])
  const params = useParams();

  const fetchEvents = async () => {
    const response = await fetch(params.id ? `http://localhost:5000/api/events/${params.id}` : 'http://localhost:5000/api/events', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    setEvents(json)
  }

  useEffect(() => {
    fetchEvents()
  },[])

  return (
    <>
      <div className="outer" style={ahah}>
        <div className='container' >
          {/* <div className='events mt-3'> */}
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
              <div className='haha' style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
                <div className='header mt-3' style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "start", width:"1630px" }}>
                  <div><h2>Events</h2></div>
                  <div className='searchbar' style={{alignSelf: "end"}}>
                    <div className="d-flex">
                      <input className="form-control me-2" style={{backgroundColor: "#FBCEB1", borderColor: "black"}} type="search" placeholder="Search by Event Name" aria-label="Search" name='search' onChange={handleOnChange} />
                      <button className="btn btn-outline-danger" type="submit" onClick={filterbysearch}>Search</button>
                    </div>
                  </div>
                </div>
                <div className='events mt-3'>
                {events.map((event) => {
                  return <EventCard event={event} />
                })}
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}
