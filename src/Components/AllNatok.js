// import React from "react";
// import {Card} from "../lib"
// const AllNatok = () => {
//   return (
//     <div>
//       <div className="max-w-sm">
//         <Card
//           imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
//           imgSrc="https://flowbite.com/docs/images/products/product-1.png"
//         >
//           <a href="/">
//             <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//               Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
//             </h5>
//           </a>
//           <div className="mt-2.5 mb-5 flex items-center">
//             <svg
//               className="h-5 w-5 text-yellow-300"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//             <svg
//               className="h-5 w-5 text-yellow-300"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//             <svg
//               className="h-5 w-5 text-yellow-300"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//             <svg
//               className="h-5 w-5 text-yellow-300"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//             <svg
//               className="h-5 w-5 text-yellow-300"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//             <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
//               5.0
//             </span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-3xl font-bold text-gray-900 dark:text-white">
//               $599
//             </span>
//             <a
//               href="/"
//               className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Add to cart
//             </a>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AllNatok;

import React, { useEffect, useState } from "react";
import NatokCard from "./NatokCard";

const AllNatok = () => {
  const [natok, setNatok] = useState([]);
  console.log(natok);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/probirghosh45/eid-natok-clinet/development/public/natokData.json")
      .then((response) => response.json())
      .then((json) => setNatok(json));
  }, []);

  return <div className="" style={{backgroundColor : '#5CDB95'}}>
   <h1 class="text-6xl font-normal leading-normal mt-0 mb-4 text-pink-800 text-center ">
  Eid Natok 2022
</h1>
<div className="grid md:grid-cols-3 sm:grid-cols-1 gap-x-1 gap-y-10 pb-7">
{
        natok.map((natok)=><NatokCard key={natok.id} natokData={natok} />)
     }
</div>
  </div>;
};

export default AllNatok;
