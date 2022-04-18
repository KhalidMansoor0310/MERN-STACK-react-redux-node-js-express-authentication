import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand text-white fs-3" to="/">Chatty</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2 fs-5">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/register">Sign-up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/login">Sign-in</Link>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
