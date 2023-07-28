import { React, useState, useEffect } from 'react'

const style = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    
    // flexWrap: "wrap",
}

const stylee = {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // flexWrap: "wrap",
}

const posterStyle = {
    height: "900px",
    width: "700px",
}

const Home = () => {

    const [posters, setPosters] = useState([])

    const fetchPoster = async () => {
        const response = await fetch('http://localhost:5000/api/posters', {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        setPosters(json)
        console.log(posters)
    }

    useEffect(() => {
        fetchPoster()
    })

    return (
        <>
            <div style={stylee}>
                <div className='container' style={style}>
                    {posters.map((poster) => (
                        <div className='my-5' style={{ borderStyle: "solid", borderColor: "black", boxShadow: "20px 20px 50px 15px black" }}>
                            <img className='' src={poster.img} alt="HahaXD" style={posterStyle} />
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Home
