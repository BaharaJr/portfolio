import React from "react";
import author from "../about.jpeg";

const About = () => {
  return (
    <div className="py-5 bg-dark about" id="about">
      <div className="row">
        <div className="col-lg-4 col-xm-12 photo-wrap mb-5">
          <img className="profile-img" src={author} alt="author..." />
        </div>
        <div className="col-lg-4 col-xm-12 about-text mt-5">
          <h1 className="about-heading">About Me</h1>
          <p>
            I have 2+ years of experience working on projects with companies,My
            skills dont stop there.I’m constantly looking for learning new
            things and new experiences in this vast world of creativity.
          </p>
        </div>
        <div className="col-lg-4 col-xm-12 about-text mt-5">
          <h1 className="about-heading">Hire Me</h1>
          <p>
            I am open to work and collaborate with you to make a great and
            modern web designs, landing pages and much more for good prices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
