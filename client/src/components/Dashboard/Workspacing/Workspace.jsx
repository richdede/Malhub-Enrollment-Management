import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

const Workspace = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchWorkspaces = async () => {
      var userId = localStorage.getItem("userId");

      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/users " + userId +"/workspace-packages"
        );
        setWorkspaces(response.data.workspaces);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchWorkspaces();
  }, []); // Run only once on component mount

  return (
    <div>
      <h3> My Workspaces</h3>
      {isLoading ? (
        <div>Fetching workspaces...</div>
      ) : workspaces?.length ? (
        <div>
          <h3>Available Workspaces:</h3>
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
              {workspaces.map((workspace) => (
                <tr key={workspace.id}>
                  <td>{workspace.id}</td>
                  <td>{workspace.name}</td>
                  <td>{workspace.amount}</td>
                   <td>{workspace.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="workspaceBtn">
            <a className="workspaceLink" href="/WorkspaceReg">
              Create a new workspace
            </a>
          </button>
        </div>
      ) : (
        <div>
          <p className="paragraph">You have not created any workspaces.</p>
          <p>
            <a className="workspaceLink" href="/WorkspaceReg">
              <button className="workspaceBtn">Create a new workspace</button>
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Workspace;
