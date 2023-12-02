import React from "react";
const logo = "Malhub-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <footer className="foot">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="link_ul">
          <p>
            Makers and Leaders Hub (MALhub) is an open, serene and beautiful
            shared workspace for startups and entrepreneurs at a lower cost than
            they would spend on space of their own.
          </p>
          <div className="Relearn">
            <h2>Relearn</h2>
            <ul className="link">
              <li>Frontend Coding</li>
              <li>Data Analyst</li>
              <li>Product Design</li>
              <li>Cybersecurity</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="QL">
            <h2>Quick Links</h2>
            <ul className="link">
              <li>Tech Skills</li>
              <li>Physical Bootcamp</li>
              <li>Innovation Hub</li>
              <li>Startups</li>
              <li>Become a Mentor</li>
            </ul>
          </div>
          <div className="Company">
            <h2>Company</h2>
            <ul className="link">
              <li>About Us</li>
              <li>Become a Tech Whiz</li>
              <li>Careers</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div className="CMP">
            <h2>Policies</h2>
            <ul className="link">
              <li>Terms and Conditions</li>
              <li>Refund Policy</li>
              <li>Privacy and Policy</li>
            </ul>
          </div>
          <div className="Resources">
            <h2>Resources</h2>
            <ul className="link">
              <li>FAQs</li>
              <li>Co-working Space</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="bottom"></div>
        <p>© 2023 MALhub. All right reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
