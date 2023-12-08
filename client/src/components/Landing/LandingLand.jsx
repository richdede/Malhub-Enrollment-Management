import { NavLink } from "react-router-dom";
const workplace = "dashboards.png";
const LandingLand = () => {
  const AllSpace = [
    {
      id: 1,
      name: "training",
      paragraph: "the gradual accumulation of information about atomic and...",
    },
    {
      id: 2,
      icon: "../../Public/workplace.png",
      name: "workspace",
      paragraph: "the gradual accumulation of information about atomic and...",
    },
    {
      id: 3,
      icon: "../../Public/homework.png",
      name: "certified teaching",
      paragraph: "the gradual accumulation of information about atomic and...",
    },
  ];
  return (
    <div className="LandingLand">
      <div className="BImg">
        <div className="Img">
          <div className="FadeIn_text">
            <div className="welcome">
              <h4>Welcome</h4>
            </div>
            <h2
              style={{
                fontSize: "50px",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              25k+ STUDENTS <br />
              TRUST US{" "}
            </h2>
            <h2
              style={{
                fontSize: "19px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              we know how large object will act, but things on a <br /> small
              scale just do not act that way.
            </h2>
            <a href="Register">
              <button>Join Us</button>
            </a>
          </div>

          <div className="enroll">
            {AllSpace.map((item) => (
              <NavLink className="enrollList" to={item.path} key={item.id}>
                <div className="itemPath">
                  <div
                    style={{
                      color: "black",
                      backgroundColor: "#C1BDBA",
                      width: "60px",
                      textAlign: "center",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={workplace}
                      alt="/"
                      style={{
                        width: "35px",
                        paddingTop: "5px",
                      }}
                    />
                  </div>
                  <h2 style={{ color: "black" }}>{item.name}</h2>
                  <p style={{ width: "250px", color: "black" }}>
                    {item.paragraph}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingLand;
