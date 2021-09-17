import React from 'react'

const Experiences = () => {
    return (
      <div className="experience bg-dark" id="experience">
        <div className="d-flex justify-content-center py-3">
          <h1 className="experience-heading">My Experience</h1>
        </div>
        <div className="experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Exact Software: July - September 2018</h3>
              <p>
                Penultimate year summer internship program, for the role of an
                intern software developer. My main responsibilities included;To
                learn how to create cross-platform application using
                xamarin.forms,the use of visual studio,Basics of C# programming
                language and also connecting Ui's.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Irabu Systems: January - December 2020 </h3>
              <p>
                A graduate program that involves assisting the organization in
                designing front end websites for its clients. As the front-end
                developer,i learnt designing using Figma,markup languages
                like html,css; programming languages like javascript,other web
                skills like PWA,SPA; Wordpress and its plugins like Elementor
                and woocommerce.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>SheCodesForChange : March 2020</h3>
              <p>
                A volunteering Program that involved training young
                girls, so as to add the number of girls who will engage more in
                science especially developing softwares.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Hackathon Challenge : 8th March 2020</h3>
              <p>
                This was a challenge which was prepared by the American Embassy
                that required participants to develop different stories about
                Women's Day and compete with other participants from Kenya using
                Scratch Programming Language.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Google Andela: June - December 2020</h3>
              <p>
                Participated in a Scholarship program offered by Google Andela
                its was a 6 months scholarship on google web development.I had a
                great opportunity to learn and understand each and every detail
                going around mobile web apps.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Oblicq Limited: June 2021 - Current</h3>
              <p>
                An Internship Program that helped me to improve my great
                understanding on designing and creating software
                programs,intergrating systems,training end users,analysing
                algorithms, writing computer instructions,debugging and
                maintaining systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Experiences
