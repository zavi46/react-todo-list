import React from 'react'
import propTypes from 'prop-types'
import { Link } from "react-router-dom";


function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.homeTitle}</Link>
                        </li>
                    </ul>
                    {props.searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : ""}
                </div>
            </div>
        </nav>
    )
}

export default Header

Header.defaultProps = {
    title: 'Your Title',
    hometitle: 'HomeTitle',
    abouttitle: 'aboutTitle',
    searchBar: true
}

Header.propTypes = {
    title: propTypes.string,
    hometitle: propTypes.string,
    abouttitle: propTypes.string,
    searchBar: propTypes.bool.isRequired // isRequired mean mush be passes in Header Tag in App.js
}



