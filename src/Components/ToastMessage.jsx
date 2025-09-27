import React from "react";

const ToastMessage = ({ children, showToast }) => {
  return (
    <div>
      {showToast && (
        <div
          className=" fixed   bottom-1 right-1
         md:bottom-10 md:right-5 bg-blue-500 px-3 py-2 w-[200px] text-white rounded-md text-center "
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ToastMessage;
