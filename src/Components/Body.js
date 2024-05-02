// // Body.jsx
// import React from "react";

// const Body = () => {
//   const jobs = [
//     {
//       id: 1,
//       title: "Junior Accountant",
//       location: "Visakhapatnam",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 3,
//     },
//     {
//       id: 2,
//       title: "UI/UX Designer",
//       location: "Hyderabad",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 2,
//     },
//     {
//       id: 3,
//       title: "React Developer",
//       location: "Mumbai",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 10,
//     },
//     {
//       id: 4,
//       title: "AWZ Architect",
//       location: "Bengaluru",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 5,
//     },
//     {
//       id: 4,
//       title: "AWZ Architect",
//       location: "Bengaluru",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 5,
//     },
//     {
//       id: 4,
//       title: "AWZ Architect",
//       location: "Bengaluru",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 5,
//     },
//     {
//       id: 4,
//       title: "AWZ Architect",
//       location: "Bengaluru",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 5,
//     },
//     // ... add more job objects here
//   ];

//   return (
//     <div className=" ml-4">
//       <h2 className="text-xl font-semibold text-start">Open Jobs</h2>
//       <div className="shadow-xl  rounded-xl  py-3">
//         <table className="w-3/4 bg-white">
//           <thead>
//             <tr className="">
//               <th className="py-2 px-1">Job Title</th>
//               <th className="py-2 px-1">Location</th>
//               <th className="py-2 px-1">Post Date</th>
//               <th className="py-2 px-1">End Date</th>
//               <th className="py-2 px-1">Total Applicants</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map((job) => (
//               <tr key={job.id} className="bg-white">
//                 <td className="py-2 px-1">{job.title}</td>
//                 <td className="py-2 px-1">{job.location}</td>
//                 <td className="py-2 px-1">{job.postDate}</td>
//                 <td className="py-2 px-1">{job.endDate}</td>
//                 <td className="py-2 px-1">{job.applicants}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Body;

// import React from "react";

// const Body = () => {
//   const jobs = [
//     {
//       id: 1,
//       title: "Junior Accountant",
//       location: "Visakhapatnam",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 3,
//     },
//     {
//       id: 2,
//       title: "UI/UX Designer",
//       location: "Hyderabad",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 2,
//     },
//     {
//       id: 3,
//       title: "React Developer",
//       location: "Mumbai",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 10,
//     },
//     {
//       id: 4,
//       title: "AWZ Architect",
//       location: "Bengaluru",
//       postDate: "15.05.2024",
//       endDate: "15.09.2024",
//       applicants: 5,
//     },

//     {
//       id: 4,
//       title: "react Developer",
//       location: "Bengaluru",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 5,
//     },
//     {
//       id: 4,
//       title: "java Developer",
//       location: "Bengaluru",
//       postDate: "15.04.2024",
//       endDate: "15.04.2024",
//       applicants: 5,
//     },
//     // Rest of the job objects
//   ];

//   let serialNumber = 0;

//   return (
//     <div className=" ml-4">
//       <h2 className="text-xl font-semibold text-start">Open Jobs</h2>
//       <div className="shadow-xl  rounded-xl  py-3">
//         <table className="w-3/4 bg-white">
//           <thead>
//             <tr className="">
//               <th className="py-2 px-1">S.No</th>
//               <th className="py-2 px-1">Job Title</th>
//               <th className="py-2 px-1">Location</th>
//               <th className="py-2 px-1">Post Date</th>
//               <th className="py-2 px-1">End Date</th>
//               <th className="py-2 px-1">Total Applicants</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map((job) => (
//               <tr key={job.id} className="bg-white">
//                 <td className="py-2 px-1">{++serialNumber}</td>
//                 <td className="py-2 px-1">{job.title}</td>
//                 <td className="py-2 px-1">{job.location}</td>
//                 <td className="py-2 px-1">{job.postDate}</td>
//                 <td className="py-2 px-1">{job.endDate}</td>
//                 <td className="py-2 px-1">{job.applicants}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Body;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  const jobs = [
    {
      id: 1,
      title: "Junior Accountant",
      location: "Visakhapatnam",
      postDate: "15.04.2024",
      endDate: "15.04.2024",
      applicants: 3,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "Hyderabad",
      postDate: "15.04.2024",
      endDate: "15.04.2024",
      applicants: 2,
    },
    {
      id: 3,
      title: "React Developer",
      location: "Mumbai",
      postDate: "15.04.2024",
      endDate: "15.04.2024",
      applicants: 10,
    },

    {
      id: 4,
      title: "AWZ Architect",
      location: "Bengaluru",
      postDate: "15.05.2024",
      endDate: "15.09.2024",
      applicants: 5,
    },
    {
      id: 4,
      title: "react Developer",
      location: "Bengaluru",
      postDate: "15.04.2024",
      endDate: "15.04.2024",
      applicants: 5,
    },
    // Rest of the job objects
  ];

  let serialNumber = 0;

  return (
    <div className=" ml-4  ">
      <h2 className="text-xl font-semibold text-start">Open Jobs</h2>
      <div className="shadow-xl  rounded-xl  py-3">
        <table className="w-11/12 bg-white">
          <thead>
            <tr className="">
              <th className="py-2 px-1">S.No</th>
              <th className="py-2 px-1">Job Title</th>
              <th className="py-2 px-1">Location</th>
              <th className="py-2 px-1">Post Date</th>
              <th className="py-2 px-1">End Date</th>
              <th className="py-2 px-1">Total Applicants</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="bg-white cursor-pointer hover:bg-gray-100"
              >
                <td className="py-2 px-1">{++serialNumber}</td>
                <td className="py-2 px-1">{job.title}</td>
                <td className="py-2 px-1">{job.location}</td>
                <td className="py-2 px-1">
                  <FontAwesomeIcon icon={faCalendarAlt} /> {job.postDate}
                </td>
                <td className="py-2 px-1">
                  <FontAwesomeIcon icon={faCalendarAlt} /> {job.endDate}
                </td>
                <td className="py-2 px-1">
                  <FontAwesomeIcon icon={faUser} /> {job.applicants}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Body;
