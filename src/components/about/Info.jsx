import React from "react";

export const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience Projects</h3>
                <span className="about__subtitle">More 2 years</span>
            </div>
            <div className="about__box">
                <i className='bx bx-briefcase about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10 + Projects</span>
            </div>
            <div className="about__box">
                <i className='bx bx-support about__icon'></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>

        </div>
    )
}