import React, { useState } from "react";

function Input({ width = "100%", border="1px solid #ccc", marginTop = "20px",borderRadius="4px", padding = "10px", placeholder = "Enter your Title", backgroundColor = "#fff", type = "text", borderColor = "#E9EAF0", id = "text", value, onChange, inputProps }) {

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      {...inputProps}

      style={{
        padding: padding,
        fontSize: "12px",
        borderRadius: borderRadius,
        border: border,
        outline: "none",
        borderColor: borderColor,
        borderWidth: 1,
        fontFamily: "Poppins-Regular",
        width: width,
        height: "49px",
        marginTop: marginTop,
        backgroundColor: backgroundColor
      }}
    />
  );
}

export default Input;
