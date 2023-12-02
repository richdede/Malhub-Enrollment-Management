import React from "react";
// const img_logo = "new-home.jpg";
const EMS = "EMS.png";
const Landing = () => {
  return (
    <section className="landing_page">
      <div className="landing">
        <div className="us">
          <h2>Cultivating Your Learning</h2>
          <p>The fastest way to put anything Tech Course On YOUR Mendullar</p>
        </div>
        <div className="Logo">
          <div className="img_logo">
            <div className="heading_paragraph_img">
              <h2>Cultivating A Vibrant Tech Ecosystem.</h2>
              <p>
                Stay ahead in the rapidly evolving tech landscape, and open the
                <br />
                doors to exciting career opportunities.
              </p>
            </div>
            {/* <div className="paragraph_img">
           
          </div> */}
          </div>
        </div>
        <div className="courses">
          <button>Knowledgebase</button>
          <button>Support Services</button>
        </div>
        <div className="hr"></div>
        <div className="EMS">
          <img src={EMS} alt="EMS" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
