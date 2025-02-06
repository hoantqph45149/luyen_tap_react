import { useState } from "react";

export default function Tabs({ tabs, defaultTab, onTabChange }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].label);

  const handleTabClick = (tab) => {
    setActiveTab(tab.label);
    onTabChange && onTabChange(tab);
  };

  return (
    <div className="w-full">
      {/* Thanh Tabs */}
      <ul className="flex flex-col md:flex-row justify-center items-center">
        {tabs.map((tab) => (
          <li
            key={tab.label}
            className={`w-[240px] md:w-auto text-center px-6 py-2 border-gray-300 text-lg font-semibold transition-colors cursor-pointer ${
              activeTab === tab.label
                ? "bg-blue-500 text-white border-b-0"
                : "text-gray-600 bg-slate-200"
            } `}
            onClick={() => handleTabClick(tab)}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      {/* Nội dung hiển thị */}
      <div className="mt-16">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
}
