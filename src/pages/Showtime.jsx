import React, { useEffect, useState } from "react";
import MovieShowtimes from "../components/MovieShowtime";

const Showtime = () => {
  const [activeTab, setActiveTab] = useState("");
  const [data, setData] = useState([]);
  const [movieShowtimes, setMovieShowtimes] = useState([]);
  const handleTabClick = (dateId) => {
    setActiveTab(dateId);
    const findShowtime = data.find((item) => item.date === dateId);
    setMovieShowtimes(findShowtime);
  };

  useEffect(() => {
    fetch("http://localhost:3000/dates")
      .then((res) => res.json())
      .then((res) => {
        setData(res[0].showtimes);
        setActiveTab(res[0].showtimes[0].date);
        const findShowtime = res[0].showtimes.find(
          (item) => item.date === res[0].showtimes[0].date
        );
        setMovieShowtimes(findShowtime);
      })
      .catch((err) => console.error("Error fetching showtimes:", err));
  }, []);
  console.log(movieShowtimes);
  return (
    <>
      <div className="container font-oswald">
        <ul className="grid grid-cols-3 sm:grid-cols-7  border-b">
          {data.map((item) => (
            <li
              key={item.date}
              className={`text-center px-2 lg:px-6 py-2 sm:text-sm lg:text-base xl:text-xl font-extrabold transition-colors cursor-pointer ${
                activeTab === item.date
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 border-b-2 border-transparent"
              }`}
              onClick={() => handleTabClick(item.date)}
            >
              {item.day_label}
            </li>
          ))}
        </ul>
      </div>
      {movieShowtimes?.movies?.map((item) => (
        <MovieShowtimes key={item.id} movieShowtimes={item} />
      ))}
    </>
  );
};

export default Showtime;
