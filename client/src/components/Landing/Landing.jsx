import React from "react";
const img_logo = "default.jpg";
const EMS = "EMS.png";
const Landing = () => {
  return (
    <section className="landing_page">
      <div className="landing">
        <div className="us">
          <h2>Cultivating Your Learning</h2>
          <p>The fastest way to put anything Tech Course On YOUR Mendullar</p>
        </div>
        <div className="img_logo">
          <img src={img_logo} alt="img_logo" />
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
