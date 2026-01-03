// import React, { useMemo } from "react";
// import { Box } from "@chakra-ui/react";

// // Render the gradient as an inline SVG to avoid global CSS overrides
// const LogoCube = ({ size = "32px", radius = "10px", from = "#3B82F6", to = "#A855F7" }) => {
//   const gradId = useMemo(() => `logo-grad-${Math.random().toString(36).slice(2, 9)}`, []);
//   const rx = typeof radius === "string" ? parseInt(radius.replace("px", "")) || 8 : radius;

//   return (
//     <Box as="span" display="inline-block" w={size} h={size} flexShrink={0} aria-hidden="true">
//       <svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//         xmlns="http://www.w3.org/2000/svg"
//         role="img"
//         aria-hidden="true"
//       >
//         <defs>
//           <linearGradient id={gradId} x1="0%" x2="100%" y1="0%" y2="0%">
//             <stop offset="0%" stopColor={from} />
//             <stop offset="100%" stopColor={to} />
//           </linearGradient>
//         </defs>
//         <rect x="0" y="0" width="100" height="100" rx={rx} ry={rx} fill={`url(#${gradId})`} />
//       </svg>
//     </Box>
//   );
// };

// export default LogoCube;


import React, { useMemo } from "react";
import { Box } from "@chakra-ui/react";

const LogoCube = ({
  size = "32px",
  radius = "10px",
  from = "#3B82F6",
  to = "#A855F7"
}) => {
  const gradId = useMemo(
    () => `logo-grad-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  const rx =
    typeof radius === "string"
      ? parseInt(radius.replace("px", "")) || 10
      : radius;

  return (
    <Box
      as="span"
      display="inline-block"
      w={size}
      h={size}
      flexShrink={0}
      aria-hidden="true"
      borderRadius={radius}
      boxShadow="0 6px 18px rgba(88, 101, 242, 0.25)"   // Soft glow like design
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>

        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx={rx}
          ry={rx}
          fill={`url(#${gradId})`}
        />
      </svg>
    </Box>
  );
};

export default LogoCube;
