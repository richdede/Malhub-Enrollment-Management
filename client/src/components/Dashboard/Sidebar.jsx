<<<<<<< HEAD
// import React from 'react';
// import { Link } from "react-router-dom";
// import { useState } from 'react';

// import {redirect, useHistory} from 'react-router-dom';
// import axios from 'axios';
=======
import { useEffect, useState } from "react";
>>>>>>> ffaac047513f49661f7ebca01942ebf411395da9
const logo = "Malhub-logo.png";
// const dashboardLogo = "dashboards.png";
const courseLogo = "homework.png";
const workspaceLogo = "workplace.png";
<<<<<<< HEAD
// const paymentLogo = "transaction-history.png"


// const Sidebar = () => {
  // const Side = () => {
  // const [selectedItem, setSelectedItem] = useState(null);
  // const [registeredCourse, setRegisteredCourse] = useState(['front end development']);
  // const [registeredWorkspace, setRegisteredWorkspace] = useState(['workspaces']);

  // const handeClick = (item) => {
  //   setSelectedItem(item);
  // };

  // const CourseList = () => {
  //   if (registeredCourse.length > 0) {
  //     return (
  //       <div>
  //         <h2>Registered Courses:</h2>
  //         <ul>
  //           {registeredCourse.map((course, index) => (
  //             <li key={index}>{course}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     );
  //   } else {
  //     return <p>you have not Registered for any course</p>;
  //   }
  // };

  // const workspaceList = () => {
  //   if (registeredWorkspace.length > 0) {
  //     return (
  //       <div>
  //         <h2>Registered workspaces:</h2>
  //         <ul>
  //           {registeredWorkspace.map((workspace, index) => (
  //             <li key={index}>{workspace}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     );
  //   } else {
  //     return <p>you have not Registered for any workspace</p>
  //   }
  // };

  // const renderList = () => {
  //   switch (selectedItem) {
      // case 'dashboard':
      //     return <p>dashboard</p>;
  //     case 'courses':
  //       return CourseList();
  //     case 'workspaces':
  //       return workspaceList();
  //     case 'paymentHistory':
  //       return <p>payment history</p>;
  //     default:
  //       return null;


  //   }
  // };

  // const registerForCourse = (course) => {
  //   setRegisteredCourse((prevCourse) => [...prevCourse, course]);
  // };


























  // return (
  //   <>
  //     <div className='container'>
  //       <nav className='sidebar'>
  //         <img src={logo} alt="logo" style={{ maxWidth: "30%" }} />
          {/* <p>welcome </p> */}

          {/* <ul className='dashboardUl'> */}
            {/* <Link to="/course">
        <li className='dashboardLI'><img src={courseLogo} alt="logo" className='logo' />courses</li>
        </Link> */}
            {/* <li className='dashboardLI' onClick={() => handeClick('courses')}><img src={courseLogo} alt="logo" className='logo' />courses</li>

            <li className='dashboardLI' onClick={() => handeClick('workspaces')}><img src={workspaceLogo} alt="logo" className='logo' />workspaces</li>
            <li className='dashboardLI' onClick={() => handeClick('paymentHistory')}> <img src={paymentLogo} alt="logo" className='logo' />payment history</li>
          </ul>
        </nav>
        {renderList()}
        {selectedItem === 'courses' && (
          <div>
            <h3>available courses to register:</h3>
            <ul>
              <li onClick={() => registerForCourse} ></li>
            </ul>
          </div>
        )
        } */}


        {/* <div>
          <h1>My Dashboard</h1> */}
          {/* <p>welcome, {user.name} </p> */}
        {/* </div>
        <div>

=======
const paymentLogo = "transaction-history.png";

const Sidebar = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) location.assign("/login");
    setUser(localStorage.getItem('user'))
  }, []);

  return (
    <>
      <div className="container">
        <nav className="sidebar">
          <img src={logo} alt="logo" style={{ maxWidth: "30%" }} />
          {/* <p>welcome </p> */}

          <ul className="dashboardUl">
            <li className="dashboardLI">
              <img src={dashboardLogo} alt="logo" className="logo" />
              dashbord
            </li>
            <li className="dashboardLI">
              <img src={courseLogo} alt="logo" className="logo" />
              courses
            </li>
            <li className="dashboardLI">
              <img src={workspaceLogo} alt="logo" className="logo" />
              workspaces
            </li>
            <li className="dashboardLI">
              {" "}
              <img src={paymentLogo} alt="logo" className="logo" />
              payment history
            </li>
          </ul>
        </nav>
        <div>
          <h1>My Dashboard</h1>
          {user && <p>welcome {user} </p>}
>>>>>>> ffaac047513f49661f7ebca01942ebf411395da9
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}; */}
{/* // const handleLogin = async () => { */}
{/* //   try { */}
{/* //     const response = await axios.post('/api/login',{username,password});
//     const userData = response.data;
//     setUser(userData);
//     redirectToWelcome();
//   }catch (error)
// }
// export default Sidebar;




// */}

import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [registeredCourses, setRegisteredCourses] = useState([]); 
  const [registeredWorkspaces, setRegisteredWorkspaces] = useState([]); 
  const [availableCourses, setAvailableCourses] = useState([]); 
  const [availableWorkspaces, setAvailableWorkspaces] = useState([]); 
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https:');
        const data = await response.json();
        setAvailableCourses(data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    const fetchWorkspaces = async () => {
      try {
        const response = await fetch('https:');
        const data = await response.json();
        setAvailableWorkspaces(data.workspaces);
      } catch (error) {
        console.error('Error fetching workspaces:', error);
      }
    };

    fetchCourses();
    fetchWorkspaces();
  }, []); 

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderCoursesList = () => {
    if (registeredCourses.length > 0) {
      return (
        <div>
          <h3>Registered Courses:</h3>
          <ul>
            {registeredCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <p>You have not registered for any courses.</p>;
    }
  };

  const renderWorkspacesList = () => {
    if (registeredWorkspaces.length > 0) {
      return (
        <div>
          <h3>Registered Workspaces:</h3>
          <ul>
            {registeredWorkspaces.map((workspace, index) => (
              <li key={index}>{workspace}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <p>You have not registered for any workspaces.</p>;
    }
  };

  const renderAvailableCoursesList = () => {
    return (
      <div>
        <h3>Available Courses to Register:</h3>
        <ul>
          {availableCourses.map((course) => (
            <li key={course.id} onClick={() => registerForCourse(course.name)}>
              {course.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderAvailableWorkspacesList = () => {
    return (
      <div>
        <h3>Available Workspaces to Register:</h3>
        <ul>
          {availableWorkspaces.map((workspace) => (
            <li key={workspace.id} onClick={() => registerForWorkspace(workspace.name)}>
              {workspace.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const registerForCourse = (course) => {
    setRegisteredCourses((prevCourses) => [...prevCourses, course]);
  };

  const registerForWorkspace = (workspace) => {
    setRegisteredWorkspaces((prevWorkspaces) => [...prevWorkspaces, workspace]);
  };

  const renderList = () => {
    switch (selectedItem) {
      // case 'Dashboard':
      //   return <p>Dashboard content</p>;
      case 'Courses':
        return (
          <>
            {renderCoursesList()}
            {renderAvailableCoursesList()}
          </>
        );
      case 'Workspaces':
        return (
          <>
            {renderWorkspacesList()}
            {renderAvailableWorkspacesList()}
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <aside>
      
      <nav className='sidebar'>
         <img src={logo} alt="logo" style={{ maxWidth: "30%" }} />
          {/* <p>welcome </p> */}

          <ul className='dashboardUl'>
            {/* <Link to="/course">
        <li className='dashboardLI'><img src={courseLogo} alt="logo" className='logo' />courses</li>
        </Link> */}
             <li className='dashboardLI' onClick={() => handleItemClick('Courses')}><img src={courseLogo} alt="logo" className='logo' />courses</li>

            <li className='dashboardLI' onClick={() => handleItemClick('Workspaces')}><img src={workspaceLogo} alt="logo" className='logo' />workspaces</li>
            {/* <li className='dashboardLI' onClick={() => handleItemClick('paymentHistory')}> <img src={paymentLogo} alt="logo" className='logo' />payment history</li> */}
          </ul>
        </nav>




      {/* <nav>
        <ul>
          <li onClick={() => handleItemClick('Dashboard')}>Dashboard</li>
          <li onClick={() => handleItemClick('Courses')}>Courses</li>
          <li onClick={() => handleItemClick('Workspaces')}>Workspaces</li>
          <li onClick={() => handleItemClick('Settings')}>Settings</li>
        </ul>
      </nav> */}
      {renderList()}
    </aside>
  );
};

export default Sidebar;























































































































































































































































































































































































































































































































































































































=======
};

export default Sidebar;
>>>>>>> ffaac047513f49661f7ebca01942ebf411395da9
