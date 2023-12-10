import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

const Workspace = () => {
  const [registeredWorkspacepackage, setRegisteredWorkspacepackage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchRegisteredWorkspacepackage = async () => {
      var userId = localStorage.getItem("userId");

      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/users/" + userId +"/workspace-packages"
        );
        setRegisteredWorkspacepackage(response.data.workspacePackages);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchRegisteredWorkspacepackage();
  }, []); // Run only once on component mount

  return (
    <div>
      <h3> My Workspace Packages</h3> <br />
      {isLoading ? (
        <div>Fetching workspaces...</div>
      ) : registeredWorkspacepackage?.length ? (
        <div>
          <h3>Available Workspace Packages:</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {registeredWorkspacepackage.map( (workspace) => (
                <tr key={workspace.id}>
                  <td>{workspace.id}</td>
                  <td>{workspace.name}</td>
                  <td>{workspace.amount}</td>
                   <td>{workspace.days}</td>
                </tr>
              ))}
            </tbody>
          </table> <br />
          <button className="workspaceBtn" style={{ padding:"10px", fontSize:"20px", fontWeight:"bolder"}} >
            <a className="workspaceLink" href="/WorkspaceReg">
              Explore Other Packages
            </a>
          </button>
        </div>
      ) : (
        <div>
          <p className="paragraph">You are not subscribed to any workspace.</p> <br />
          <p>
            <a className="workspaceLink" href="/WorkspaceReg">
              <button className="workspaceBtn">Subcribe Now</button>
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Workspace;
