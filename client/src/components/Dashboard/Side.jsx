// import { useState } from 'react';

// const Side = () => {
//     const [selectedItem, setSelectedItem] =useState(null);
//     const [registeredCourse, setRegisteredCourse] = useState(['front end development']);
//     const [registeredWorkspace, setRegisteredWorkspace] = useState(['workspaces']);
    
//     const handeClick = (item) => {
//         setSelectedItem(item);
//     };

//     const CourseList = () => {
//         if (registeredCourse.length > 0) {
//           return(
//             <div>
//                 <h2>Registered Courses:</h2>
//                 <ul>
//                     {registeredCourse.map((course,index) => (
//                    <li key={index}>{course}</li>
//                    )) }
//                 </ul>
//             </div>
//           );
//                     }else{
//                         return <p>you have not Registered for any course</p>;
//                     }
//         };
        
//     const workspaceList = () => {
//         if (registeredWorkspace.length > 0) {
//           return(
//             <div>
//                 <h2>Registered workspaces:</h2>
//                 <ul>
//                     {registeredWorkspace.map((workspace,index)=>(
//                    <li key={index}>{workspace}</li>
//                    )) }
//                 </ul>
//             </div>
//           );
//                     }else{
//                         return <p>you have not Registered for any workspace</p>
//                     }
//         };

//         const renderList = () => {
//             switch (selectedItem) {
//                 case 'dashboard':
//                     return <p>dashboard</p>;
//                 case 'courses':
//                     return CourseList();
//                 case 'workspaces':
//                    return workspaceList();
//                 case 'paymentHistory':
//                    return <p>payment history</p>;
//                 default:
//                     return null;  

                              
//             }
//         };

//         return(
//             <aside>
//             <nav>
//                 <ul>
//                     <li onClick={() => handeClick('dashboard')}>Dashboard</li>
//                     <li onClick={() => handeClick('courses')}>Courses</li>
//                     <li onClick={() => handeClick('workspaces')}>WorkSpaces</li>
//                     <li onClick={() => handeClick('paymentHistory')}>payment history</li>
//                 </ul>
                
//             </nav>
//             {renderList}
//             </aside>
//         );
//     };
// export default Side;