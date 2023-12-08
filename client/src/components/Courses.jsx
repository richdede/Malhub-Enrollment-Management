import React, { useState, useEffect } from "react";
import axios from "axios";
import './Home.css';

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
      <h2> My Courses</h2>
      {isLoading ? (
        <div>Fetching registered courses...</div>
      ) : registeredCourses?.length ? (
        <div>
          <h3>Registered Courses:</h3>
          <ul>
            {registeredCourses.map(function (course) {
              return <li key={course.id}>{course.name}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>
          <p>You have not registered for any courses.</p>
          <p>
           <button className="courseBtn"> <a className="courseLink" href="/CourseReg">Register for a course</a> </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Courses;
