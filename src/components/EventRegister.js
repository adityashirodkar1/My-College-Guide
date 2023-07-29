import { React, useState } from 'react'
import { useParams } from 'react-router-dom';



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
  backgroundColor: "rgba(255, 255, 255, 0.2)"
}


const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100%",
  //backgroundImage: `url("https://res.cloudinary.com/dc4kfswj7/image/upload/v1690631672/HahaXD/anders-jilden-AkUR27wtaxs-unsplash_1_ua9xql.jpg")`,
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // backgroundColor: "#4158D0",
  // backgroundImage: "linearGradient(43deg, #4158D0 0 %, #C850C0 46 %, #FFCC70 100 %)"
}

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

      <div style={style} className='regis'>
        {/* <div className='container'> */}

          <form onSubmit={null}>
            <div className="container" style={box}>
              <div className="head">
                <h3 style={{ textAlign: "center" }}>Registration</h3>
              </div>
              <div className="form-floating mb-3 my-5">
                <input style={{ backgroundColor: "#CCCCFF" }} type="text" className="form-control" onChange={handleOnChange} id="floatingInput" placeholder="Name" name='name' />
                <label htmlFor="floatingInput">Applicant's Name</label>
              </div>
              <div className="form-floating my-4">
                <input style={{ backgroundColor: "#CCCCFF" }} type="email" className="form-control" onChange={handleOnChange} id="floatingPassword" placeholder="Email" name='email' />
                <label htmlFor="floatingPassword">Applicant's Email</label>
              </div>
              <div className='my-4'>
                <button className='btn btn-primary'>Register</button>
              </div>
            </div>
          </form>

        </div>
      {/* </div> */}

    </>
  )
}
