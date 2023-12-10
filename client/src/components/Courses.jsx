import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Courses = () => {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchRegisteredCourses = async () => {
      var userId = localStorage.getItem("userId");
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/users/" + userId + "/courses"
        );
        setRegisteredCourses(response.data.courses);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchRegisteredCourses();
  }, []); // Run only once on component mount

  return (
    <div>
      <h2 style={{ fontSize:"22px"}}> My Courses</h2> <br />
      {isLoading ? (
        <div>Fetching registered courses...</div>
      ) : registeredCourses?.length ? (
        <div>
          <h3>Registered Courses:</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Course Duration</th>
              </tr>
            </thead>
            <tbody>
              {registeredCourses.map(function (course) {
                return (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.name}</td>
                    <td>{course.amount}</td>
                    <td>{course.duration}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            className="courseBtn"
            style={{ padding: "10px", fontSize: "20px", fontWeight: "bolder" }}
          >
            <a className="courseLink" href="/CourseReg">
              Explore Other Courses
            </a>{" "}
          </button>
        </div>
      ) : (
        <div>
          <p className="pargraph">You are not enrolled to any course.</p>
          <p>
            <button className="courseBtn">
              {" "}
              <a className="courseLink" href="/CourseReg">
                Register for a course
              </a>{" "}
            </button>
            <a className="courseLink" href="/CourseReg">
              {" "}
              <button className="courseBtn"> Register for a course </button>
            </a>
            <a className="courseLink" href="/CourseReg">
              {" "}
              <button className="courseBtn"> Enroll Now </button>
            </a>

          <a className="courseLink" href="/CourseReg">  <button className="courseBtn" style={{ padding:"10px", fontSize:"18px", fontWeight:"bolder"}}  > Enroll Now </button></a>

          </p>
        </div>
      )}
    </div>
  );
};

export default Courses;
