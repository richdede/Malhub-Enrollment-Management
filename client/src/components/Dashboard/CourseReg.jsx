import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import Sides from "../Sides";
import './CourseReg.css';

const RegistrationForm = () => {
  const navigate = useNavigate(); 
  const [courses, setCourses] = useState();
  const [formData, setFormData] = useState({
    selectedCourse: "",
    courseName: "",
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
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "selectedCourse") {
      const [courseId, courseName] = value.split("-");
      if (courseId === formData.selectedCourse) {
        toast.error("You can't pick the same course.");
      } else {
        setFormData({
          ...formData,
          selectedCourse: courseId,
          courseName: courseName,
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
        `http://127.0.0.1:8000/api/courses/${formData.selectedCourse}/users/${userId}/enroll`,
        formData
      );

      let amount = response?.data?.data?.enrollment?.payment?.amount;

      if (amount) {
        alert(`Make a transfer of ${amount} to MALHUB Account Number: 234567890 STANBIC IBTC`);
        toast.success('Registration successful');
      } else {
        toast.error('You have registered for this course before');
      }

      setFormData({
        selectedCourse: "",
        courseName: "",
      });

      navigate("/courses");

    }
     catch (error) {
      console.error("Error registering:", error.response?.data);
      toast.error("Error registering. Please check the console for more details.");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="side">
          <Sides />
        </div>
        <div className="courseForm">
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
      </div>
    </div>
  );
};

export default RegistrationForm;
