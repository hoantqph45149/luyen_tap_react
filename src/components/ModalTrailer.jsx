import React, { useState } from "react";
import { Modal } from "reactstrap";

const ModalTrailer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Nút mở modal */}
      <button
        onClick={toggleModal}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Open Trailer
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Modal Container */}
          <div
            className={`bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-1000 ease-linear ${
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-black">Trailer Nhím Sonic 3</h3>
              <button
                onClick={toggleModal}
                className="text-gray-500 text-4xl hover:text-gray-300"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-4">
              <iframe
                width="800"
                height="400"
                src="https://www.youtube.com/embed/k7iRFBcHRXY?rel=0&showinfo=0&autoplay=1"
                allow="autoplay; encrypted-media"
                title="Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalTrailer;
