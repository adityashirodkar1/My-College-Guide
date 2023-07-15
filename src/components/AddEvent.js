import React from 'react'

export default function AddEvent() {
    return (
        <>
            <h1>Add Event</h1>
            <div className='container'>
                <label htmlFor="title">Event Name:</label>
                <input type="text" name='title' id='title' onChange={handleOnChange} />
                <label htmlFor="desc">Description:</label>
                <textarea name="desc" id="desc" cols="30" rows="10" onChange={handleOnChange}></textarea>
                <label htmlFor="event">Type:</label>
                <button onClick={null}></button>
            </div>
        </>
    )
}
