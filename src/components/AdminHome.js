import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const style = {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
}

export default function AdminHome() {

    const [committee, setCommittee] = useState({})
    const [events, setEvents] = useState([])

    const [cp, setCp] = useState("initial")
    const [vcp, setVcp] = useState([])
    const [sec, setSec] = useState([])
    const [hof, setHof] = useState([])
    const [hom, setHom] = useState([])
    const [prh, setPrh] = useState([])
    const [th, setTh] = useState([])
    const [oh, setOh] = useState([])
    const [ch, setCh] = useState([])
    const [hos, setHos] = useState([])
    const [sub, setSub] = useState([])

    const { id } = useParams();

    const handleOnChange = (event) => {
        setCommittee({ ...committee, [event.target.name]: event.target.value })
    }

    const fetchCommittee = async () => {
        const response = await fetch(`http://localhost:5000/api/admin/committee/${id}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        setCommittee(json)
        setEvents(json.eve)
        setCp(json.team.chairperson)
        setVcp(json.team.viceChairperson)
        setSec(json.team.secretary)
        setHof(json.team.headOfFinance)
        setHom(json.team.headOfMarketing)
        setPrh(json.team.publicRelationHead)
        setTh(json.team.technicalHead)
        setOh(json.team.operationhead)
        setCh(json.team.creativeHead)
        setHos(json.team.headOfSubcom)
        setSub(json.team.subcom)
    }

    useEffect(() => {
        fetchCommittee()
    },[])


    return (
        <>
            <main className="container">
                <section className="mb-3">
                    <label htmlFor="name" className="form-label">Committee Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={committee.name} onChange={handleOnChange} />
                </section>

                <section className="mb-3">
                    <label htmlFor="logo" className="form-label">Committee Logo:</label>
                    <input type="text" className="form-control" id="logo" name="logo" value={committee.logo} onChange={handleOnChange} />
                </section>

                <section className="mb-3">
                    <label htmlFor="desc" className="form-label">Description:</label>
                    <textarea className="form-control" id="desc" name="description" rows="10" value={committee.description} onChange={handleOnChange}></textarea>
                </section>

                <section className="mb-3">
                    <label htmlFor="history" className="form-label">Histroy:</label>
                    <textarea className="form-control" id="history" name="history" rows="10" value={committee.history} onChange={handleOnChange}></textarea>
                </section>

                <button className="btn btn-info">Edit</button>

                <hr />

                <p>Edit Events:</p>
                <section className='mb-3' style={style}>
                    {events.map((eve) => (
                        <a href={`event/${eve.eventId}`}><button className='btn btn-warning' style={{height: "100px" , width: "200px"}}>{eve.name}</button></a>
                    ))}
                </section>

                {/* Team */}
                <p>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Edit Team
                    </button>
                </p>
                <div className="collapse mb-3" id="collapseExample">
                    <div className="card card-body" style={{ maxWidth: "700px", maxHeight: "300px", minHeight: "300px" }}>

                        <div className="">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Vice Chairperson</span>
                                {vcp.map((member) => (
                                    <input type="text" class="form-control" name='viceChairperson' value={member} onChange={null} />
                                ))}
                            </div>
                        </div>

                        <div className="">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Secretary</span>
                                {sec.map((member) => (
                                    <input type="text" class="form-control" name='secretary' value={member} aria-describedby="basic-addon1" onChange={handleOnChange }/>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}
