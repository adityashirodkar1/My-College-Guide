import React from 'react'

const committee = {
    background: 'none',
    border: 'none',
    fontFamily: 'Great Vibes',
    fontSize: '75px'
}

const btn = {
    height: "65px",
    width: "100px"
}

export default function Committee() {

    return (
        <>
            <div style={{ height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div className='haha' style={{ height: "500px", width: "1000px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <div>
                        <a href="/committee/sponsor"><button className='btn btn-warning' style={btn}>Sponsors</button></a>
                    </div>
                    <div style={{ alignSelf: "flex-start" }}>
                        <a href="/committee/team"><button className='btn btn-warning' style={btn}>Team</button></a>
                    </div>
                    <div>
                        <a href="/committee/desc"><button style={committee}>Committee</button></a>
                    </div>
                    <div style={{ alignSelf: "end" }}>
                        <a href="/committee/desc"><button className='btn btn-warning' style={btn}>Events</button></a>
                    </div>
                    <div>
                        <a href="/committee/schedule"><button className='btn btn-warning' style={btn}>Schedule</button></a>
                    </div>
                </div>
            </div>

        </>
    )
}
