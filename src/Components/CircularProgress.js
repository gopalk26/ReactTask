// import React from "react";

// function CircularProgress({ progress }) {
//   const circleRadius = 20; // Define the radius of the circle
//   const strokeWidth = 3; // Define the stroke width

//   const circumference = 2 * Math.PI * circleRadius;
//   const offset = circumference - (circumference * progress) / 100;

//   return (
//     <div className="relative inline-block">
//       <svg className="w-12 h-12">
//         <circle
//           className="text-gray-300"
//           strokeWidth={strokeWidth}
//           stroke="currentColor"
//           fill="transparent"
//           r={circleRadius}
//           cx={circleRadius + strokeWidth}
//           cy={circleRadius + strokeWidth}
//         />
//         <circle
//           className="text-orange-500"
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={offset}
//           strokeLinecap="round"
//           stroke="currentColor"
//           fill="transparent"
//           r={circleRadius}
//           cx={circleRadius + strokeWidth}
//           cy={circleRadius + strokeWidth}
//         />
//         <text
//           className="text-white text-xs font-bold"
//           x="50%"
//           y="50%"
//           dominantBaseline="middle"
//           textAnchor="middle"
//         >
//           {progress}%
//         </text>
//       </svg>
//     </div>
//   );
// }

// export default CircularProgress;
import React from "react";

function CircularProgress({ progress }) {
  const circleRadius = 20; // Define the radius of the circle
  const strokeWidth = 3; // Define the stroke width

  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (circumference * progress) / 100;

  return (
    <div className="relative inline-block">
      <svg className="w-12 h-12">
        <circle
          className="text-gray-300"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={circleRadius}
          cx={circleRadius + strokeWidth}
          cy={circleRadius + strokeWidth}
        />
        <circle
          className="text-orange-500"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={circleRadius}
          cx={circleRadius + strokeWidth}
          cy={circleRadius + strokeWidth}
        />
        <text
          className="text-white text-xs font-bold"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
}

export default CircularProgress;
