import { React , useState , useEffect } from 'react'

export default function EventCard(props) {

    return (
        <>
        <div className="my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.event.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.event.type} {props.event.committee}</h6>
                    <div className="content"><p className="card-text">{props.event.description}</p></div>
                    <div className="link mt-3">
                        <a href={`/eveReg/${props.event._id}`}><i className="fa-solid fa-right-to-bracket fa-bounce fa-lg" style={{color: "#000000"}}></i></a>
                        <a href={`/committee/${props.event._id}`}><i className="fa-solid fa-people-roof fa-bounce fa-lg mx-3" style={{color: "#030303"}}></i></a>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
