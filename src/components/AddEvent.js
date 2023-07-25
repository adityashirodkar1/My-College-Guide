import { React, useState } from 'react'

export default function AddEvent() {

    const [newevent, setNewevent] = useState({});

    const handleOnChange = (event) => {
        setNewevent({ ...newevent, [event.target.name]: event.target.value })
        console.log(newevent)
    }

    return (
        <>

            <div className='container'>
                <h1 className="my-3">Add Event</h1>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Event Name:</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Event" onChange={handleOnChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description:</label>
                    <textarea className="form-control" id="desc" name="desc" rows="3" onChange={handleOnChange}></textarea>
                </div>

                <label htmlFor="type" className="form-label">Event Type:</label>
                <select className="form-select" aria-label="Default select example" id='type' name='type' onChange={handleOnChange}>
                    <option defaultValue>Select</option>
                    <option value="Technical" name="Technical">Technical</option>
                    <option value="Cultural" name="Cultural">Cultural</option>
                    <option value="Non-technical" name="Non-technical">Non-technical</option>
                </select>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date:</label>
                    <input type="date" className="form-control" id="date" name="date" onChange={handleOnChange} />
                </div>

                <button className='btn btn-info' onClick={null}>Add</button>
            </div>
        </>
    )
}
