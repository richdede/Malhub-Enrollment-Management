import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedCourse: '',
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/courses/{courseId}/users/{userId}/enroll');
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []); // Run only once on component mount

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.example.com/register', formData);
      console.log('Registration successful:', response.data);

      setFormData({
        name: '',
        email: '',
        selectedCourse: '',
      });
    } catch (error) {
      console.error('Error registering:', error.response.data);
    }
  };

  return (
    <div>
      <h2> Course Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Select Course:
          <select name="selectedCourse" value={formData.selectedCourse} onChange={handleInputChange} required>
            <option value="" disabled>
              Select a course
            </option>
            {courses.map((course) => (
              <option key={course.id} value={course.name}>
                {course.name} - ${course.price}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;