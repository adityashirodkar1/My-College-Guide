import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function EditEvent() {

    const handleOnChange = (event) => {
        setEve({ ...eve, [event.target.name]: event.target.value })
        console.log(eve)
    }

    const [eve, setEve] = useState({})
    const { id } = useParams();

    const fetchEvent = async () => {
        const response = await fetch(`http://localhost:5000/api/admin/events/${id}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        setEve(json)
        console.log(localStorage.token)
    }

    useEffect(() => {
        fetchEvent()
    }, [])

    return (
        <div>
            <>
                <div className='container my-3'>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Event Name:</label>
                        <input style={{backgroundColor: "#1d1160", color:"white"}} type="text" className="form-control" id="title" name="title" value={eve.title} onChange={handleOnChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description:</label>
                        <textarea style={{backgroundColor: "#1d1160", color:"white"}} className="form-control" id="desc" name="description" rows="3" value={eve.description} onChange={handleOnChange}></textarea>
                    </div>

                    <label htmlFor="type" className="form-label">Event Type:</label>
                    <select style={{backgroundColor: "#1d1160", color:"white"}} className="form-select" aria-label="Default select example" id='type' name='type' onChange={handleOnChange}>
                        <option defaultValue>Select</option>
                        <option value="Technical" name="Technical">Technical</option>
                        <option value="Cultural" name="Cultural">Cultural</option>
                        <option value="Non-technical" name="Non-technical">Non-technical</option>
                    </select>

                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date:</label>
                        <input style={{backgroundColor: "#1d1160", color:"white"}} type="date" className="form-control" id="date" name="date" onChange={handleOnChange} />
                    </div>

                    <button className='btn btn-info' onClick={null}>Edit</button>
                </div>
            </>
        </div>
    )
}
