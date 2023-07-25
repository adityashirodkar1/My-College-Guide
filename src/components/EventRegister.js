import { React, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function EventRegister() {
  const params = useParams();
  const eventId = params.id;
  const [applicant, setApplicant] = useState({});

  const handleOnChange = (event) => {
    setApplicant({ ...applicant, [event.target.name]: event.target.value })
    console.log(applicant)
  }

  const addApplicant = async () => {

    // Default options are marked with *
    const response = await fetch(`http://localhost:5000/api/events/register/${eventId}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      //mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Accept': 'application/json'
      },
      body: JSON.stringify(applicant), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <>
      <h1>Registeration</h1>
      <div className='container'>
        <label htmlFor="name">Applicant's Name:</label>
        <input type="text" name='name' id='name' onChange={handleOnChange} />
        <label htmlFor="email">Applicant's Email:</label>
        <input type="email" name='email' id='email' onChange={handleOnChange} />
        <button onClick={addApplicant}></button>
      </div>
    </>
  )
}
