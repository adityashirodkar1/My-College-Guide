import React from 'react'

const style = { 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-evenly", 
    alignItems: "center",
    width: "200px"
}

const icon = {
    height: "100px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "50%"
}

const subicon = {
  height: "80px",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "50%"
}



export default function Member(props) {
  return (
    <div style={style}>
      <div className="memberImg">
        <img src="https://res.cloudinary.com/dc4kfswj7/image/upload/v1690039718/HahaXD/profile-icon-9_efutfj.png" alt="Profile" style={ props.post !== 'subcom' ? icon : subicon }/>
      </div>
      <div className="memberName" style={style}>
        { props.post !== 'subcom' ? <h4>{props.member}</h4> : <h6>{props.member}</h6> }
        { props.post !== 'subcom' ? <i>({props.post})</i> : null}
      </div>
    </div>
  )
}
