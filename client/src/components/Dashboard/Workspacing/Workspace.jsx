import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WorkspaceReg";

const Courses = () => {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchRegisteredCourses = async () => {
      var userId = localStorage.getItem("userId");
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/users/" + userId + "/workspace-packages"
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
      <h3> My Workspaces</h3>
      {isLoading ? (
        <div>Fetching registered Workspaces...</div>
      ) : registeredCourses?.length ? (
        <div>
          <h3>Registered  Workspaces:</h3>
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
      <th>Workspace Duration</th>
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
<button className="courseBtn"> <a className="courseLink" href="/WorkspaceReg">Register for a workspace</a> </button>

        </div>
      ) : (
        <div>
          <p className="pargraph">You have not registered for any workspace.</p>
          <p>

          <a className="courseLink" href="/WorkspaceReg">  <button className="courseBtn"> Register for a workspace </button></a>

          </p>
        </div>
      )}
    </div>
  );
};

export default Courses;
