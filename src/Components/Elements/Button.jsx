import React from "react";

const Button = (props) => {
  const { children, colortxt = "text-white", bgtxt = "bg-orange-500" } = props;

  return (
    <div>
      <button
        className={`p-3 ${colortxt} ${bgtxt} text-lg rounded-full hover:text-orange-500 hover:bg-white`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
