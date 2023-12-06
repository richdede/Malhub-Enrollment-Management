// import React from 'react'

// const Courses = () => {
//     return (
//         <div>
            
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Courses = () => {
//   const [registeredCourses, setRegisteredCourses] = useState([]);
//   const [availableCourses, setAvailableCourses] = useState([]);

//   useEffect(() => {
//     // Fetch courses from the backend API
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://api.example.com/courses');
//         setAvailableCourses(response.data.courses);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };

//     fetchCourses();
//   }, []); // Run only once on component mount

//   const registerForCourse = (course) => {
//     setRegisteredCourses((prevCourses) => [...prevCourses, course]);
//   };

//   return (
//     <div>
//       <h2>Courses</h2>
//       <div>
//         <h3>Registered Courses:</h3>
//         <ul>
//           {registeredCourses.map((course, index) => (
//             <li key={index}>{course}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Available Courses to Register:</h3>
//         <ul>
//           {availableCourses && availableCourses.length > 0 ? (
//             availableCourses.map((course) => (
//               <li key={course.id} onClick={() => registerForCourse(course.name)}>
//                 {course.name}
//               </li>
//             ))
//           ) : (
//             <p>No available courses at the moment.</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Courses;

//         </div>
//     )
// }

// export default Courses
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [registeredCourses, setRegisteredCourses] = useState([]);
//   const [availableCourses, setAvailableCourses] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    // Simulate fetching registered courses from the backend API
    // You may replace this with an actual API call
    const fetchRegisteredCourses = async () => {
      try {
        // Assume you have an endpoint for fetching registered courses for the current user
        const response = await axios.get("http://127.0.0.1:8000/api/users/{userId}/courses");
        setRegisteredCourses(response.data.registeredCourses);
        setIsRegistered(true);
      } catch (error) {
        // Handle error or set isRegistered to false if no courses are registered
        setIsRegistered(false);
      }
    };

    // Fetch available courses from the backend API
    // const fetchAvailableCourses = async () => {
    //   try {
    //     const response = await axios.get('http://127.0.0.1:8000/api//course');
    //     setAvailableCourses(response.data.courses);
    //   } catch (error) {
    //     console.error('Error fetching courses:', error);
    //   }
    // };

    fetchRegisteredCourses();
    // fetchAvailableCourses();
  }, []); // Run only once on component mount

  return (
    <div>
      <h2>Courses</h2>
      {isRegistered ? (
        <div>
          <h3>Registered Courses:</h3>
          <ul>
            {registeredCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>You have not registered for any courses.</p>
          <p>
            <a href="/CourseReg">Register for courses</a>
          </p>
        </div>
      )}
      {/* <div>
        <h3>Available Courses to Register:</h3>
        <ul>
          {availableCourses && availableCourses.length > 0 ? (
            availableCourses.map((course) => (
              <li key={course.id}>{course.name}</li>
            ))
          ) : (
            <p>No available courses at the moment.</p>
          )}
        </ul>
      </div> */}
    </div>
  );
};

export default Courses;