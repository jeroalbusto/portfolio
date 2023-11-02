import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 Years Working Javascript</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-server about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 Years Working Backend</span>
        </div>

        <div className="about__box">
        <i class='bx bx-desktop about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 Years Working Frontend</span>
        </div>
    </div>
  )
}

export default Info