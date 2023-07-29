import { React, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const box = {
    height: "500px",
    width: "400px",
    borderStyle: "solid",
    borderRadius: "10px",
    paddingTop: "50px",
    color: "black",
    // filter: "opacity(30%)"
    // webkitBackdropFilter: "blur(10px)",
    // backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    boxShadow: "10px 10px 10px black"
}


const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    // backgroundImage: `url("https://res.cloudinary.com/dc4kfswj7/image/upload/v1690570251/HahaXD/pang-yuhao-_kd5cxwZOK4-unsplash_1_m8vtl4.jpg")`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundPosition: "center"
}

export default function Login() {

    const [user, setUser] = useState({})
    const { id } = useParams();

    let navigate = useNavigate();

    const handleOnChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/committees/adminlogin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: user.username, password: user.password})
        });
        const json = await response.json()

        if (json.success){
            localStorage.setItem('token',json.authtoken);
            navigate(`/admin/${id}`)
        }
        else{
            alert('Wrong hhhh')
        }
    }

    return (
        <>
            <div className='login' style={style}>
                <form onSubmit={handleSubmit}>
                    <div className="container" style={box}>
                        <div className="head">
                            <h3 style={{ textAlign: "center" }}>Admin Login</h3>
                        </div>
                        <div className="form-floating mb-3 my-5">
                            <input style={{ backgroundColor: "#F0F8FF", borderRadius: "10px", color: "#006400" }} type="username" className="form-control" value={user.username} onChange={handleOnChange} id="floatingInput" placeholder="Username" name='username' />
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating my-4">
                            <input style={{ backgroundColor: "#F0F8FF", borderRadius: "10px", color: "#006400" }} type="password" className="form-control" value={user.password} onChange={handleOnChange} id="floatingPassword" placeholder="Password" name='password' />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className='my-4'>
                            <button className='btn btn-success' style={{boxShadow: "5px 5px 10px black"}}>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
