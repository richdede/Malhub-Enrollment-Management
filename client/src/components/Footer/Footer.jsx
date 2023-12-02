import React from "react";
const logo = "White-Logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <footer className="foot">
        <div className="display_footer">
          <div className="paragraph">
            <img src={logo} alt="logo" style={{ width: "220px" }} />
            <p>
              Makers and Leaders Hub (MALhub) is <br />
              an open, serene and beautiful shared <br />
              workspace for startups and entrepreneurs at a<br /> lower costthan
              they would spend on space of their own.
            </p>
          </div>
          <div className="link_ul">
            <div className="Relearn">
              <h2>Relearn</h2>
              <ul className="link">
                <li>
                  <a href="/">Frontend Coding</a>
                </li>
                <li>
                  <a href="/">Data Analyst</a>
                </li>
                <li>
                  <a href="/">Product Design</a>
                </li>
                <li>
                  <a href="/">Cybersecurity</a>
                </li>
                <li>
                  <a href="/">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="QL">
              <h2>Quick Links</h2>
              <ul className="link">
                <li>
                  <a href="/">Tech Skills</a>
                </li>
                <li>
                  <a href="/">Physical Bootcamp</a>
                </li>
                <li>
                  <a href="/">Innovation Hub</a>
                </li>
                <li>
                  <a href="/">Startups</a>
                </li>
                <li>
                  <a href="/">Become a Mentor</a>
                </li>
              </ul>
            </div>
            <div className="Company">
              <h2>Company</h2>
              <ul className="link">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Become a Tech Whiz</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Affiliate</a>
                </li>
              </ul>
            </div>
            <div className="CMP">
              <h2>Policies</h2>
              <ul className="link">
                <li>
                  <a href="/">Terms and Conditions</a>
                </li>
                <li>
                  <a href="/">Refund Policy</a>
                </li>
                <li>
                  <a href="/">Privacy and Policy</a>
                </li>
              </ul>
            </div>
            <div className="Resources">
              <h2>Resources</h2>
              <ul className="link">
                <li>
                  <a href="/">FAQs</a>
                </li>
                <li>
                  <a href="/">Co-working Space</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
        <p>© 2023 MALhub. All right reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
