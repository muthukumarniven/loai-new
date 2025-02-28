import React from 'react';

function Button({ text, onClick, padding = "0", width = "100%",maxWidth="", fontFamily = "Poppins-SemiBold", color = "#fff", backgroundColor = "#007BFF", marginTop: marginTop, border = "none", textDecoration = "none", borderRadius = "4px" }) {
    return (
        <button
            className="custom-button"
            onClick={onClick}
            
            style={{
                backgroundColor: backgroundColor,
                color: color,
                width: width,
                maxWidth:maxWidth,
                height: '100%',
                minHeight:"50px",
                border: border,
                borderRadius: borderRadius,
                fontSize: '16px',
                cursor: 'pointer',
                fontFamily: fontFamily,
                marginTop: marginTop,
                textDecoration: textDecoration,
                padding: padding
            }}
            
        >
            {text}
        </button>
    );
}

export default Button;