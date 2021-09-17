import React from 'react'
import Typed from "react-typed"


const Header = () => {
    return (
      <div className="head-wrapper" id="home">
        <div className="main-info">
          <h1>Front-End Developer and UI/UX Designer</h1>
          <Typed
            className="typed-text"
            strings={["Ui/Ux Design", "Web Development", "Fully Responsive"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <div className="btn-main-offer">Contact Me</div>
        </div>
      </div>
    );
}

export default Header
