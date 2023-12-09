import React, { useState, useEffect } from "react";
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
      <h3> My Courses</h3>
      {isLoading ? (
        <div>Fetching registered courses...</div>
      ) : registeredCourses?.length ? (
        <div>
          <h3>Registered Courses:</h3>
          {/* <ul>
            {registeredCourses.map(function (course) {
              return <li key={course.id}>{course.name}</li>;
            })}
          </ul> */}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Date Created</th>
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
          <button className="courseBtn">
            {" "}
            <a className="courseLink" href="/CourseReg">
              Register for a course
            </a>{" "}
          </button>
        </div>
      ) : (
        <div>
          <p className="pargraph">You have not registered for any courses.</p>
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
          </p>
        </div>
      )}
    </div>
  );
};

export default Courses;
