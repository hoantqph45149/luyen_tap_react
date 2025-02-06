import { X } from "lucide-react";
import React from "react";

function Modal({
  isOpen,
  onClose,
  onSubmit,
  title = "Modal Title",
  isHeader = true,
  isFooter = true,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      {/* Modal Container */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        {/* Header */}

        {isHeader && (
          <div className="flex justify-between border-b pb-3 items-center space-x-5">
            <h2 className="text-lg md:text-3xl font-bold">{title}</h2>
            <button onClick={onClose} className="text-gray-500">
              <X size={30} strokeWidth={3} />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="mt-4">{children}</div>

        {/* Footer */}

        {isFooter && (
          <div className="flex justify-end gap-2 pt-3 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Close
            </button>
            <button
              onClick={onSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Modal;
