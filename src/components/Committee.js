import { React , useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'

const committeebtn = {
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

    const [committee , setCommittee] = useState({})
    const id = useParams();
    const fetchCommittee = async (props) => {
        const response = await fetch(`http://localhost:5000/api/committees/${id.id}`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        setCommittee(json)
    }

    useEffect(() => {
        fetchCommittee()
    })

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
                        <a href="/committee/desc"><button style={committeebtn}>{committee.name}</button></a>
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
