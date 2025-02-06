// common/Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-50">
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-blue-900"></div>
    </div>
  );
};

export default Loader;
