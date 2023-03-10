import React from 'react'



export const Social = () => {

    return (
        <div className="home__social-group">
            <a  aria-label='GitHub' target={"_blank"} href="https://github.com/CodigoTotal01" className="home__social-icon" >
                <i className="uil uil-github"></i>
            </a>
            <a  aria-label='LinkeId' target={"_blank"} href="https://www.linkedin.com/in/christian-eduardo-palacios-tarrillo-605a78217/" className="home__social-icon" >
                <i className="uil uil-linkedin"></i>
            </a>
            <a   aria-label='Youtube'  target={"_blank"} href="https://www.youtube.com/channel/UC2qgmDJD1MacV0LELNCvdCw" className="home__social-icon" >
                <i className="uil uil-youtube"></i>
            </a>

        </div>
    )
}
