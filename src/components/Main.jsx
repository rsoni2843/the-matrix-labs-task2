import React from "react";
import "../styles/Main.css";

const Main = () => {
  return (
    <>
      <div className="wallet-address">
        <p>
          <svg
            width="29"
            height="27"
            viewBox="0 0 29 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.625 22.25V23.7083C26.625 25.3125 25.3125 26.625 23.7083 26.625H3.29167C1.67292 26.625 0.375 25.3125 0.375 23.7083V3.29167C0.375 1.6875 1.67292 0.375 3.29167 0.375H23.7083C25.3125 0.375 26.625 1.6875 26.625 3.29167V4.75H13.5C11.8813 4.75 10.5833 6.0625 10.5833 7.66667V19.3333C10.5833 20.9375 11.8813 22.25 13.5 22.25H26.625ZM13.5 19.3333H28.0833V7.66667H13.5V19.3333ZM19.3333 15.6875C18.1229 15.6875 17.1458 14.7104 17.1458 13.5C17.1458 12.2896 18.1229 11.3125 19.3333 11.3125C20.5438 11.3125 21.5208 12.2896 21.5208 13.5C21.5208 14.7104 20.5438 15.6875 19.3333 15.6875Z"
              fill="#B4B4B4"
            />
          </svg>
          Wallet Address -{" "}
        </p>
        <p>0x83272672762799jdhdkjk892978278bdbj92</p>
      </div>
      <div className="balance-div">
        <div>
          <h2>My Total Token</h2>
          <h1>34234 Token</h1>
        </div>
        <div>
          <h2>My Total Token</h2>
          <h1>34234 Token</h1>
        </div>
        <div>
          <h2>My Total Token</h2>
          <h1>34234 Token</h1>
        </div>
        <div>
          <h2>My Total Token</h2>
          <h1>34234 Token</h1>
        </div>
        <div>
          <h2>My Total Token</h2>
          <h1>34234 Token</h1>
        </div>
        <div>
          <h2>My Total Token</h2>
          <h1>34234 Token</h1>
        </div>
      </div>
    </>
  );
};

export default Main;
