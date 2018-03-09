import React from 'react';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Nightlife</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/signin">Sign in</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/signup">Sign up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/xxyzz">Github</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://xxyzz.me">Blog</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;