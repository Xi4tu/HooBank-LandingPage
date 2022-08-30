import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`group py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:bg-gradient-to-r from-[#880672] to-[#290124] ${styles}`}>
    <span className="group-hover:text-white duration-[400ms]">Get Started</span>
  </button>
)
 

export default Button;
