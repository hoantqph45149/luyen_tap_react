import { useState } from "react";
import AnimationPlay from "./AnimationPlay";
import Modal from "./modal";
import TabShowtime from "./TabShowtime";
import { Ticket } from "lucide-react";

const MovieCard = ({ movie, showInfo = true }) => {
  const [openModalTrailer, setOpenModalTrailer] = useState(false);
  const [openModalShowtimes, setOpenModalShowtimes] = useState(false);
  const [idMovie, setIdMovie] = useState(null);
  return (
    <>
      <Modal
        isOpen={openModalShowtimes}
        onClose={() => setOpenModalShowtimes(false)}
        onSubmit={() => alert("Submitted!")}
        title={`Lịch chiếu - Phim: ${movie.name}`}
        isFooter={false}
      >
        <TabShowtime idMovie={idMovie} />
      </Modal>
      <Modal
        isOpen={openModalTrailer}
        onClose={() => setOpenModalTrailer(false)}
        onSubmit={() => alert("Submitted!")}
        title={`Trailer - ${movie.name}`}
        isFooter={false}
      >
        <iframe
          className="w-full md:w-[800px]"
          height="400"
          src={`https://www.youtube.com/embed/${movie.trailer_url}?rel=0&showinfo=0&autoplay=1`}
          allow="autoplay; encrypted-media"
          title="Video"
        ></iframe>
      </Modal>
      <div className="max-w-full rounded-xl overflow-hidden  bg-white">
        {/* Movie Poster */}
        <div className="relative group ">
          <img
            src={movie.img_thumbnail}
            alt={movie.name}
            className="w-full rounded-xl"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-xl"></div>

          {/* Play Button */}
          <div
            onClick={() => setOpenModalTrailer(true)()}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          >
            <AnimationPlay />
          </div>

          {/* Age Rating */}
          {movie.rating && (
            <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-md">
              {movie.rating}
            </span>
          )}

          {/* Hot Badge */}
          {movie.is_hot && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md rotate-12">
              HOT
            </span>
          )}
        </div>

        {/* Movie Info */}
        {showInfo && (
          <>
            <div>
              <h3 className="text-lg font-bold text-accent truncate py-3 font-oswald">
                {movie.name}
              </h3>
              <p className="text-sm py-1 font-lato">
                <span className="font-bold">Thể loại:</span>{" "}
                {movie.genres.join(", ")}
              </p>
              <p className="text-sm font-lato">
                <span className="font-bold">Thời lượng:</span> {movie.duration}{" "}
                phút
              </p>
            </div>

            {/* Buy Ticket Button */}
            <div className="py-4">
              <button
                onClick={() => {
                  setIdMovie(movie.title);
                  setOpenModalShowtimes(true);
                }}
                className="relative w-full bg-gradient-to-r from-[#0a64a7] via-[#258dcf] to-[#3db1f3] bg-[length:200%_auto] text-white font-bold py-2 rounded-md hover:opacity-90 transition"
              >
                <span className="absolute top-1/2 left-2 transform -translate-y-1/2 -rotate-45 opacity-50">
                  <Ticket size={50} strokeWidth={3} />
                </span>
                MUA VÉ
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieCard;
