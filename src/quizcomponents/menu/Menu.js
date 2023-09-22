import React, { useEffect, useRef, useState } from 'react'
import "./menu.css"
import profile from "../../../src/img/reactjs.png"

export default function Menu({menuClick}) {

  return (
    <>
    <article className='menuContainer'>
      <ul className='listItemContainer'>
        <li>Dashboard</li>
        <li>Courses</li>
        <li>Start quiz</li>
        <li>Register</li>
        <li>Login</li>
      </ul>
      <div className='profile'>
        <img src={profile}></img>
        <span>Bala Ladalo Daniel</span>
      </div>
      <button className='btn-go-pro'>Go pro</button>
    </article>
    </>
  )
}



// import React, { useEffect, useRef, useState } from 'react';
// import './menu.css';

// export default function Menu() {
//   const [closeModal, setCloseModal] = useState(true);
//   const modalRef = useRef();

//   const handleOutsideClick = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       setCloseModal(false); // Close the modal when clicking outside
//     }
//   };

//   useEffect(() => {
//     const handleClick = (event) => {
//       handleOutsideClick(event);
//     };

//     // Add a click event listener to the entire document
//     document.addEventListener('click', handleClick);

//     return () => {
//       // Remove the click event listener when the component unmounts
//       document.removeEventListener('click', handleClick);
//     };
//   }, []);

//   return (
//     <>
//       {closeModal && (
//         <article ref={modalRef} className='menuContainer'>
//           {/* Your modal content goes here */}
//           <div>This is the modal content</div>
//         </article>
//       )}
//     </>
//   );
// }



