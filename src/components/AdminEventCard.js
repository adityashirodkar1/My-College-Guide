import { React, useState, useEffect } from 'react'

export default function EventCard(props) {

    return (
        <>
            <div className="my-3">

                <div className="event">
                    
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.event.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.event.type}</h6>
                        <div className="content"><p className="card-text">{props.event.description}</p></div>
                        <div className="link mt-3">
                            <a href={`/eveReg/${props.event._id}`}>Event</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
