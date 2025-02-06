import { useState } from "react";
import AnimationPlay from "./AnimationPlay";
import Modal from "./modal";

const MovieCard = ({ movie }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={() => alert("Submitted!")}
        title="Trailer - Bộ tứ báo thủ"
        isFooter={false}
      >
        <iframe
          className="w-full md:w-[800px]"
          height="400"
          src="https://www.youtube.com/embed/miC9FrfpwtY?rel=0&showinfo=0&autoplay=1"
          allow="autoplay; encrypted-media"
          title="Video"
        ></iframe>
      </Modal>
      <div className="max-w-full rounded-xl overflow-hidden  bg-white">
        {/* Movie Poster */}
        <div className="relative group ">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full rounded-xl"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-xl"></div>

          {/* Play Button */}
          <div
            onClick={() => setOpenModal(true)()}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          >
            <AnimationPlay />
          </div>

          {/* Age Rating */}
          {movie.ageRating && (
            <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-md">
              {movie.ageRating}
            </span>
          )}

          {/* Hot Badge */}
          {movie.isHot && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md rotate-12">
              HOT
            </span>
          )}
        </div>

        {/* Movie Info */}
        <div>
          <h3 className="text-lg font-bold text-blue-700 truncate py-3">
            {movie.title}
          </h3>
          <p className="text-sm py-1">
            <span className="font-bold">Thể loại:</span>{" "}
            {movie.genres.join(", ")}
          </p>
          <p className="text-sm">
            <span className="font-bold">Thời lượng:</span> {movie.duration} phút
          </p>
        </div>

        {/* Buy Ticket Button */}
        <div className="py-4">
          <button className="w-full bg-gradient-to-r from-[#0a64a7] via-[#258dcf] to-[#3db1f3] bg-[length:200%_auto] text-white font-bold py-2 rounded-md hover:opacity-90 transition">
            MUA VÉ
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
