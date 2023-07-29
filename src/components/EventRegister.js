import { React, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



const box = {
  height: "500px",
  width: "400px",
  borderStyle: "solid",
  borderRadius: "10px",
  paddingTop: "50px",
  color: "black",
  // filter: "opacity(30%)"
  // webkitBackdropFilter: "blur(10px)",
  // backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  boxShadow: "10px 10px 10px black"
}


const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100%"
}

export default function EventRegister() {

  const navigate = useNavigate();
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
    navigate(`/committee/${eventId}`)
  }

  return (
    <>

      <div style={style} className='regis'>

          <div className="container" style={box}>
            <div className="head">
              <h3 style={{ textAlign: "center" }}>Registration</h3>
            </div>
            <div className="form-floating mb-3 my-5">
              <input style={{ backgroundColor: "#CCCCFF", borderRadius: "10px" }} type="text" className="form-control" onChange={handleOnChange} id="floatingInput" placeholder="Name" name='name' />
              <label htmlFor="floatingInput">Applicant's Name</label>
            </div>
            <div className="form-floating my-4">
              <input style={{ backgroundColor: "#CCCCFF", borderRadius: "10px" }} type="email" className="form-control" onChange={handleOnChange} id="floatingPassword" placeholder="Email" name='email' />
              <label htmlFor="floatingPassword">Applicant's Email</label>
            </div>
            <div className='my-4'>
              <button className='btn btn-primary' style={{boxShadow: "5px 5px 10px black"}} onClick={addApplicant}>Register</button>
            </div>
          </div>
      </div>
    </>
  )
}
