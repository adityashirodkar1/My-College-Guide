import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const committeebtn = {
    background: 'none',
    border: 'none',
    fontFamily: 'Great Vibes',
}

//<button style={committeebtn}><h1 style={{fontSize: '100px'}}>{props.com.name}</h1></button>

export default function ComHeader(props) {
  return (
    <>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly"}}>
            <div><AnchorLink href="#events"><button className='btn btn-primary mx-2'>Event</button></AnchorLink></div>
            <div><AnchorLink href="#schedule"><button className='btn btn-primary mx-2'>Schedule</button></AnchorLink></div>
            <div><img src={props.com.logo} alt="" style={{width: "400px"}}/></div>
            <div><AnchorLink href="#sponsors"><button className='btn btn-primary mx-2'>Sponsor</button></AnchorLink></div>
            <div><AnchorLink href="#team"><button className='btn btn-primary mx-2'>Team</button></AnchorLink></div>
        </div>
    </>
  )
}
