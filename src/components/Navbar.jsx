import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <button>
          Swap{" "}
          <svg
            width="30"
            height="25"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.65 10.7143L0 17.8571L6.65 25V19.6429H18.3333V16.0714H6.65V10.7143ZM30 7.14286L23.35 0V5.35714H11.6667V8.92857H23.35V14.2857L30 7.14286Z"
              fill="#71C7EC"
            />
          </svg>
        </button>
        <button>Connect</button>
      </nav>
    </>
  );
};

export default Navbar;
