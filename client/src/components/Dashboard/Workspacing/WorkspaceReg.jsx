import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Side from "./Side";
import '../CourseReg.css'; // Assuming you have a corresponding CSS file

const WorkspaceRegistrationForm = () => {
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState();
  const [formData, setFormData] = useState({
    selectedWorkspace: "",
    workspaceName: "",
  });

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/workspace-packages");
        setWorkspaces(response.data);
      } catch (error) {
        console.error("Error fetching workspaces:", error);
      }
    };

    fetchWorkspaces();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "selectedWorkspace") {
      const [workspaceId, workspaceName] = value.split("-");
      if (workspaceId === formData.selectedWorkspace) {
        toast.error("You can't pick the same workspace.");
      } else {
        setFormData({
          ...formData,
          selectedWorkspace: workspaceId,
          workspaceName: workspaceName,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var userId = localStorage.getItem("userId");
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/workspacepackages/${formData.selectedWorkspace}/users/${userId}/enroll`,
        formData
      );

      let amount = response?.data?.data?.enrollment?.payment?.amount;

      if (amount) {
        alert(`Make a transfer of ${amount} to MALHUB Account Number: 234567890 STANBIC IBTC`);
        toast.success('Registration successful');
      } else {
        toast.error('You have been enrolled to this workspace.');
      }

      setFormData({
        selectedWorkspace: "",
        workspaceName: "",
      });

      navigate("/sidebar/workspaces");

    } catch (error) {
      console.error("Error registering:", error.response?.data);
      toast.error("Error registering. Please check the console for more details.");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="side">
          <Side />
        </div>
        <div className="content">
          <nav className='navBar'><h1>Dashboard</h1></nav>

          <div className="workspaceForm">
            <h2>Workspace Registration Form</h2>
            <form onSubmit={handleSubmit}>
              <label className="label">
                Select Workspace:
                <select
                  name="selectedWorkspace"
                  value={formData.selectedWorkspace}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select a workspace
                  </option>
                  {workspaces ? (
                    workspaces.map((workspace) => (
                      <option key={workspace.id} value={workspace?.id}>
                        {workspace?.name} - {workspace.amount}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      Loading workspaces...
                    </option>
                  )}
                </select>
              </label>
              <br />
              <button className="reg" type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceRegistrationForm;
