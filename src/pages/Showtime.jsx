import React, { useEffect, useState } from "react";
import MovieShowtimes from "../components/MovieShowtime";

const Showtime = () => {
  const [activeTab, setActiveTab] = useState("");
  const [data, setData] = useState([]);
  const [showtimes, setShowtime] = useState([]);

  const handleTabClick = (dateId) => {
    setActiveTab(dateId);
    const findShowtime = data.find((item) => item.day_id === dateId);
    setShowtime(findShowtime.showtimes);
  };

  useEffect(() => {
    fetch("http://localhost:3000/dates")
      .then((res) => res.json())
      .then((res) => {
        if (res.length > 0) {
          setData(res);
          setActiveTab(res[0].day_id);
          const findShowtime = res.find(
            (item) => item.day_id === res[0].day_id
          );
          console.log(" findShowtime ", findShowtime);
          setShowtime(findShowtime.showtimes);
        }
      })
      .catch((err) => console.error("Error fetching showtimes:", err));
  }, []);
  console.log(" Datas ", data);
  return (
    <>
      <div className="container font-oswald">
        <ul className="grid grid-cols-3 sm:grid-cols-7  border-b">
          {data.map((item) => (
            <li
              key={item.day_id}
              className={`text-center px-2 lg:px-6 py-2 sm:text-sm lg:text-base xl:text-xl font-extrabold transition-colors cursor-pointer ${
                activeTab === item.day_id
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 border-b-2 border-transparent"
              }`}
              onClick={() => handleTabClick(item.day_id)}
            >
              {item.date_label}
            </li>
          ))}
        </ul>
      </div>
      <MovieShowtimes />
    </>
  );
};

export default Showtime;
