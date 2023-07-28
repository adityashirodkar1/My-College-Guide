import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddEvent() {

    const [newevent, setNewevent] = useState({});
    const navigate = useNavigate();

    const handleOnChange = (event) => {
        setNewevent({ ...newevent, [event.target.name]: event.target.value })
        console.log(newevent)
    }

    const addEvent = async () => {
        const response = await fetch(`http://localhost:5000/api/admin/addEvent`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify(newevent),
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        navigate('/events')
    }

    return (
        <>
            <div className='container'>
                <h1 className="my-3">Add Event</h1>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Event Name:</label>
                    <input style={{backgroundColor: "#1d1160", color:"white"}} type="text" className="form-control" id="title" name="title" placeholder="Event" onChange={handleOnChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description:</label>
                    <textarea style={{backgroundColor: "#1d1160", color:"white"}} className="form-control" id="desc" name="description" rows="3" onChange={handleOnChange}></textarea>
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

                <button className='btn btn-info' onClick={addEvent}>Add</button>
            </div>
        </>
    )
}
