import React, { useState, useEffect } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [courses, setCourses] = useState();
  const [formData, setFormData] = useState({

    selectedCourse: "",
  });
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/course");

        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []); // Run only once on component mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "selectedCourse") {
      const [courseId, courseName] = value.split("-");
      setFormData({
        ...formData,
        selectedCourse: courseId,
        courseName: courseName,
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
        `http://127.0.0.1:8000/api/courses/${formData.selectedCourse}/users/${userId}/enroll`,
        formData
        );
        alert("Registration successful:", response.data);
        
        setFormData({
          selectedCourse: "",
        });
    } catch (error) {
      console.error("Error registering:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Course Registration Form</h2>
      <form onSubmit={handleSubmit}>
        
        <label>
          Select Course:
          <select
            name="selectedCourse"
            value={formData.selectedCourse}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select a course
            </option>
            {courses ? (
              courses.map((course) => (
                <option key={course.id} value={course?.id}>
                  {course?.name} - {course.amount}
                </option>
              ))
            ) : (
              <option value="" disabled>
                Loading courses...
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
