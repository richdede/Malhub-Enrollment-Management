import { useState, useEffect } from "react";
import axios from "axios";

const Workspace = () => {
  const [registeredWorkspace, setRegisteredWorkspace] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchRegisteredWorkspace = async () => {
      var userId = localStorage.getItem("userId");
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/users/" + userId + "/Workspace"
        );
        setRegisteredWorkspace(response.data.Workspace);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchRegisteredWorkspace();
  }, []); // Run only once on component mount

  return (
    <div>
      <h2>Workspace</h2>
      {isLoading ? (
        <div>Fetching registered Workspace...</div>
      ) : registeredWorkspace?.length ? (
        <div>
          <h3>Registered Workspace:</h3>
          <ul>
            {registeredWorkspace.map(function (course) {
              return <li key={course.id}>{course.name}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>
          <p>You have not registered for any Workspace.</p>
          <p>
            <a href="/workspaceReg">Register for Workspace</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Workspace;
