import { React , useState } from 'react'

const box = {
    height: "500px",
    width: "400px",
    borderStyle: "solid",
    borderRadius: "10px",
    paddingTop: "50px",
}


const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%"
}

export default function Login() {

    const [user, setUser] = useState({})

    const handleOnChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(user)
    }

    return (
        <>
            <div style={style}>
                <div className="container" style={box}>
                    <div className="head">
                        <h3 style={{textAlign: "center"}}>Admin Login</h3>
                    </div>
                    <div className="form-floating mb-3 my-5">
                        <input type="username" className="form-control" id="floatingInput" placeholder="Username" onChange={handleOnChange} name='username' />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating my-4">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleOnChange} name='password' />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className='my-4'>
                        <button className='btn btn-info'>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
