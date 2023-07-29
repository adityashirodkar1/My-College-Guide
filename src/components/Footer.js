import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer bg-dark py-4 mt-auto" style={{color:'white'}}>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className="row">
                        <div className="col-sm mx-5">
                            <h4 className='text-center'>Social</h4>
                            <div className="container d-flex align-items-center justify-content-center">
                                <div className="row">
                                    <div className="col">
                                        <i className="bi bi-instagram"></i>
                                    </div>
                                    <div className="col">
                                        <i className="bi bi-twitter"></i>
                                    </div>
                                    <div className="col">
                                        <i className="bi bi-linkedin"></i>
                                    </div>
                                    <div className="col">
                                        <i className="bi bi-youtube"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm mx-5">
                            <h4 className='text-center'>About</h4>
                            <p className='text-center text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit aperiam dicta quam ipsum accusantium tempora exercitationem.</p>
                        </div>
                        <div className="col-sm mx-5">
                            <h4 className='text-center'>Legal</h4>
                            <div>
                                <a href="/" style={{color: 'grey'}}><h6 className='text-center'>Terms & Condition</h6></a>
                                <a href="/" style={{color: 'grey'}}><h6 className='text-center'>Privacy Policy</h6></a>
                                <a href="/" style={{color: 'grey'}}><h6 className='text-center'>Refund Policy</h6></a>
                            </div>         
                        </div>
                    </div>
                </div>
                <hr style={{marginInline: '10%'}} />
                <div className="d-flex align-items-center justify-content-center">
                    <div className="text-muted text-center">&copy; HahaXD 2023 | All Rights Reserved</div>
                </div>
            </footer>
        </>
    )
}
