import { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="mb-2 border rounded-lg overflow-hidden"
        >
          <div
            className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
            onClick={() => onTitleClick(index)}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <span className="text-xl transition-transform duration-300">
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>

          <div
            className={`overflow-y-scroll scrollbar-hidden transition-[max-height] duration-500 ease-in-out ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-white">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
