import { useState } from "react";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Nút mở Drawer */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Drawer
      </button>

      {/* Overlay (lớp nền tối) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="p-4">
          <button className="text-red-500" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <p className="mt-4">Drawer Content Here...</p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
