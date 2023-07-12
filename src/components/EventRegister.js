import { React, useState } from 'react'

export default function EventRegister() {

  const [applicant, setApplicant] = useState({ name: "Hey", email: "yo", event: "is" });

  // const toCheck = (event) => {
  //   console.log(applicant)
  // }

  const handleOnChange = (event) => {
    setApplicant({ ...applicant, [event.target.name]: event.target.value })
  }

  const addApplicant = async () => {

    // Default options are marked with *
    const response = await fetch('http://localhost:5000/api/events/register', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      //mode: "cors", // no-cors, *cors, same-origin
      //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Accept': 'application/json'
      },
      //redirect: "follow", // manual, *follow, error
      //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(applicant), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
    console.log(json)
  }

  return (
    <>
      <h1>Registeration</h1>
      <div className='container'>
        <label htmlFor="name">Applicant's Name:</label>
        <input type="text" name='name' id='name' onChange={handleOnChange} />
        <label htmlFor="email">Applicant's Email:</label>
        <input type="email" name='email' id='email' onChange={handleOnChange} />
        <label htmlFor="event">Applicant's event:</label>
        <input type="event" name='event' id='event' onChange={handleOnChange} />
        <button onClick={addApplicant}></button>
      </div>
    </>
  )
}
