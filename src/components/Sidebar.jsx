import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-div">
        <div>
          <p>CORE</p>
        </div>
        <div className="sidebar-titles">
          <p>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.375 14.9583H12.0417V0.375H0.375V14.9583ZM0.375 26.625H12.0417V17.875H0.375V26.625ZM14.9583 26.625H26.625V12.0417H14.9583V26.625ZM14.9583 0.375V9.125H26.625V0.375H14.9583Z"
                fill="#B4B4B4"
              />
            </svg>
            Dashboard
          </p>
          <p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
                fill="#B4B4B4"
              />
            </svg>
            Calculator
          </p>
          <p>
            <svg
              width="35"
              height="30"
              viewBox="0 0 35 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75833 12.8571L0 21.4286L7.75833 30V23.5714H21.3889V19.2857H7.75833V12.8571ZM35 8.57143L27.2417 0V6.42857H13.6111V10.7143H27.2417V17.1429L35 8.57143Z"
                fill="#B4B4B4"
              />
            </svg>
            Swap
          </p>
          <p>
            <svg
              width="27"
              height="19"
              viewBox="0 0 27 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5833 18.25H16.4167V15.3333H10.5833V18.25ZM0.375 0.75V3.66667H26.625V0.75H0.375ZM4.75 10.9583H22.25V8.04167H4.75V10.9583Z"
                fill="#B4B4B4"
              />
            </svg>
            To Do List
          </p>
          <p>
            {" "}
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="35" height="35" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlink="#image0_0_16" transform="scale(0.0416667)" />
                </pattern>
              </defs>
            </svg>
            FAQ
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
