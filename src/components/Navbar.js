// Understanding Props
import React from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="about">{ props.about }</Link>
                        </li> */}
                    </ul>
                    <button type="button" className={`btn me-3 btn-${props.titleMode===''?'secondary':'primary'}`} onClick={props.changeTitle} autoComplete="off">Blink Title</button>
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="changeMode" />
                        <label className="form-check-label" htmlFor="changeMode">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,     // Hear title is must required to passed(In case of default not set)
    about: PropTypes.string
}
// It is just used to define type of props to do not make misteks in prop sending.

Navbar.defaultProps = {
    title: 'Set Title',
    about: 'About us goes hear'
}