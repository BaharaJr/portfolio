import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faLaptopCode,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="py-5 mx-3">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="box1">
              <h1 className="services-heading">Services</h1>
              <p className="mt-3 ">
                Here are the services that i can offer you, my skills and
                experiences.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-12">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="Icon" icon={faDesktop} />
              </div>
              <h3>UI/UX Design</h3>
              <p>2 years of experience</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-12">
            <div className="box2">
              <div className="circle">
                <FontAwesomeIcon className="Icon" icon={faLaptopCode} />
              </div>
              <h3>Development</h3>
              <p>2 years of experience</p>
            </div>
          </div>
        </div>
        {/* - */}
        <div className="row ">
          <div className="col-md-4 col-sm-12 ms-auto">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="Icon" icon={faMobile} />
              </div>
              <h3>Fully Responsive</h3>
              <p>2 years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
