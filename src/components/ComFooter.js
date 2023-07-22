import React from 'react'

const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    color: "white",
    width: "800px"
}

const stylee = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    color: "white"
}

export default function Footer() {
    return (
        <>

            <footer className="footer bg-dark py-4 mt-auto" style={stylee}>
                <div><h3>Socials</h3></div>
                <div className="logo my-2" style={style}>
                    <div><img src="https://res.cloudinary.com/dc4kfswj7/image/upload/v1690055452/HahaXD/instagram_2111463_bdmxm8.png" alt="" style={{ width: "70px" }} /></div>
                    <div><img src="https://res.cloudinary.com/dc4kfswj7/image/upload/v1690055539/HahaXD/twitter_3670151_evczvz.png" alt="" style={{ width: "70px" }} /></div>
                    <div><img src="https://res.cloudinary.com/dc4kfswj7/image/upload/v1690055623/HahaXD/youtube_1384060_nrpp2e.png" alt="" style={{ width: "70px" }} /></div>
                    <div><img src="https://res.cloudinary.com/dc4kfswj7/image/upload/v1690055738/HahaXD/linkedin_145807_wkogkn.png" alt="" style={{ width: "70px" }} /></div>
                </div>
            </footer>
        </>
    )
}
