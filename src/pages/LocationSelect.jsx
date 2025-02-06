import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const locations = [
  { name: "Hà Nội", subLocations: ["Poly Hà Đông", "Poly Mỹ Đình"] },
  { name: "Hồ Chí Minh", subLocations: [] },
  { name: "Đà Nẵng", subLocations: [] },
  { name: "Hải Phòng", subLocations: [] },
];

export default function LocationSelect() {
  const [selected, setSelected] = useState("Poly Hà Đông");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (location) => {
    setSelected(location);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-white text-orange-500 border  rounded-lg"
      >
        {selected} <ChevronDown className="ml-2 h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border-t-[3px] border-orange-500 shadow-lg">
          {locations.map((location) => (
            <div key={location.name} className="relative group">
              <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-orange-200">
                {location.name}
                {location.subLocations.length > 0 && (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {location.subLocations.length > 0 && (
                <div className="absolute left-full top-2 mt-[-8px] w-40 bg-white border-t-2 border-orange-500 shadow-lg  hidden group-hover:block">
                  {location.subLocations.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleSelect(sub)}
                      className="block w-full px-4 py-2 text-left hover:bg-orange-200"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
