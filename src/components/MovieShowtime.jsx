import React from "react";
import { FaRegClock } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieShowtimes = () => {
  const showtimes = [
    { time: "15:15", seats: 1 },
    { time: "16:45", seats: 34 },
    { time: "18:30", seats: 20 },
    { time: "21:00", seats: 13 },
    { time: "22:50", seats: 24 },
    { time: "15:15", seats: 1 },
    { time: "16:45", seats: 34 },
    { time: "18:30", seats: 20 },
    { time: "21:00", seats: 13 },
    { time: "22:50", seats: 24 },
  ];

  const movie = {
    image:
      "https://files.betacorp.vn/media%2fimages%2f2024%2f12%2f20%2f400x633%2D2%2D104903%2D201224%2D49.jpg",
    title: "Paddington: Gấu Thủ Chu Du",
    genres: ["Hài hước", "Tình cảm"],
    duration: 132,
    ageRating: "T16",
    isHot: true,
  };

  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row gap-6 items-center md:items-start border-b border-[#D9D9D9] py-10">
        {/* Poster */}
        <div className="relative w-60 md:w-64 rounded-lg overflow-hidden shadow-lg">
          <MovieCard movie={movie} showInfo={false} />
        </div>

        {/* Thông tin phim */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-accent">Đèn Âm Hồn</h2>
          <div className="text-gray-500 flex justify-center md:justify-start items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <MdDiscount className="text-accent" />
              <span>Bí ẩn, Hồi hộp</span>
            </div>{" "}
            <div className="flex items-center gap-1">
              <FaRegClock className="text-accent" />
              <span> 102 phút</span>
            </div>
          </div>

          {/* Suất chiếu */}
          <div className="py-3 lg:py-5">
            <h2 className="text-lg font-bold">3D Phụ đề</h2>
            <ul className="pt-3 grid grid-cols-4 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
              {showtimes.map((item, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-200 rounded-sm text-center font-semibold transition-all hover:text-sky-500 duration-300 hover:bg-gray-300"
                >
                  <Link to={"/#"}>{item.time}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-3 lg:py-5">
            <h2 className="text-lg font-bold">2D Thuyết minh</h2>
            <ul className="pt-3 grid grid-cols-4 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
              {showtimes.map((item, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-200 rounded-sm text-center font-semibold transition-all   hover:text-sky-500 duration-300 hover:bg-gray-300"
                >
                  <Link to={"/#"}>{item.time}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieShowtimes;
