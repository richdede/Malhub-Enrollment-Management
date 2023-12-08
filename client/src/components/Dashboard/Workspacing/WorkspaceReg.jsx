import { useState, useEffect } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [workspace, setWorkspace] = useState();
  const [formData, setFormData] = useState({
    selectedWorkspace: "",
  });

  useEffect(() => {
    const fetchWorkspace = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/workspace");

        setWorkspace(response.data);
      } catch (error) {
        console.error("Error fetching workspace:", error);
      }
    };

    fetchWorkspace();
  }, []); // Run only once on component mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "selectedWorkspace") {
      const [workspaceId, workspaceName] = value.split("-");
      setFormData({
        ...formData,
        selectedWorkspace: workspaceId,
        workspaceName: workspaceName,
      });
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
        `http://127.0.0.1:8000/api/Workspace/${formData.selectedWorkspace}/users/${userId}/enroll`,
        formData
      );
      alert("Registration successful:", response.data);

      setFormData({
        selectedWorkspace: "",
      });
    } catch (error) {
      console.error("Error registering:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Workspace Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
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
            {workspace ? (
              workspace.map((workspace) => (
                <option key={workspace.id} value={workspace?.id}>
                  {workspace?.name} - {workspace.amount}
                </option>
              ))
            ) : (
              <option value="" disabled>
                Loading Workspace...
              </option>
            )}
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
