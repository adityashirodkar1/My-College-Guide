import { React, useState, useEffect } from 'react'

const style = {
    display: "flex",
    alignItems: "center",
    width: "900px",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // borderStyle: "solid", borderColor: "black", boxShadow: "20px 20px 15px black", padding: "50px",
    // flexWrap: "wrap",
    // backgroundImage: `url("https://res.cloudinary.com/dc4kfswj7/image/upload/v1690651215/HahaXD/backdrop-background-blank-board_pmgatq.jpg")`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // borderRadius: "20px"
}

const stylee = {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // flexWrap: "wrap",
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
                        <div className='poster my-5' style={{
                            height: "900px",
                            width: "700px",
                            backgroundImage: `url(${poster.img})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            borderRadius: "20px 20px",
                            boxShadow: "6px 6px 6px black"
                        }}>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Home
