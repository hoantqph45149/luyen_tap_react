import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import ModalTrailer from "./components/ModalTrailer";
import MovieCard from "./components/MovieCard";
import Tabs from "./components/Tabs";
import Modal from "./components/modal";
import TabShowtime from "./components/TabShowtime";
import MovieShowtimes from "./components/MovieShowtime";
import Showtime from "./pages/Showtime";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const accordionItems = [
    {
      title: "Section 1",
      content: "This is the content of section 1.",
    },
    {
      title: "Section 2",
      content: "This is the content of section 2.",
    },
    {
      title: "Section 3",
      content:
        "This is the content of section 3. It's a very long content.This is the content of section 2.This is the content of section 1. This is the content of section 3. It's a very long content.This is the content of section 2.This is the content of section 1. This is the content of section 3. It's a very long content.This is the content of section 2.This is the content of section 1. This is the content of section 3. It's a very long content.This is the content of section 2.This is the content of section 1. This is the content of section 3. It's a very long content.This is the content of section 2.This is the content of section 1. This is the content of section 3. It's a very long content.This is the content of section 2.This is the content of section 1. This is the content of section 3. It's a very long content.This is the content of section 2.This is the content of section 1. This is the content of section 3. It's a very long content.This is the content of section 2.This is the content of section 1. This is the content of section 3. It's a very long content.This is the content of section 2.This is the content of section 1.",
    },
  ];

  const movies = [
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2024%2f12%2f20%2f400x633%2D2%2D104903%2D201224%2D49.jpg",
      title: "Paddington: Gấu Thủ Chu Du",
      genres: ["Hài hước", "Tình cảm"],
      duration: 132,
      ageRating: "T16",
      isHot: true,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2025%2f01%2f15%2f400wx633h%2D4%2D152738%2D150125%2D82.jpg",
      title: "Avengers: Cuộc Chiến Vô Cực",
      genres: ["Hành động", "Viễn tưởng"],
      duration: 149,
      ageRating: "T18",
      isHot: true,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2024%2f12%2f20%2fscreenshot%2D2024%2D12%2D20%2D122754%2D122849%2D201224%2D30.png",
      title: "Cô Gái Đến Từ Quá Khứ",
      genres: ["Tâm lý", "Hình sự"],
      duration: 120,
      ageRating: "T16",
      isHot: false,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2025%2f01%2f14%2fposter%2Ddai%2Dchien%2Dnguoi%2Dkhong%2Dlo%2D7%2D134240%2D140125%2D74.jpg",
      title: "Người Nhện: Không Còn Nhà",
      genres: ["Hành động", "Phiêu lưu"],
      duration: 148,
      ageRating: "T13",
      isHot: true,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2025%2f01%2f14%2fposter%2Ddai%2Dchien%2Dnguoi%2Dkhong%2Dlo%2D7%2D134240%2D140125%2D74.jpg",
      title: "Thám Tử Lừng Danh Conan: Mắt Bão",
      genres: ["Hình sự", "Hoạt hình"],
      duration: 110,
      ageRating: "T12",
      isHot: false,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2024%2f12%2f20%2f400x633%2D2%2D104903%2D201224%2D49.jpg",
      title: "Kẻ Săn Mồi Biển Sâu",
      genres: ["Kinh dị", "Phiêu lưu"],
      duration: 105,
      ageRating: "T18",
      isHot: false,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2025%2f01%2f15%2f400wx633h%2D4%2D152738%2D150125%2D82.jpg",
      title: "Fast & Furious 10",
      genres: ["Hành động", "Đua xe"],
      duration: 141,
      ageRating: "T16",
      isHot: true,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2024%2f12%2f20%2fscreenshot%2D2024%2D12%2D20%2D122754%2D122849%2D201224%2D30.png",
      title: "Câu Chuyện Đồ Chơi 4",
      genres: ["Hoạt hình", "Gia đình"],
      duration: 100,
      ageRating: "P",
      isHot: false,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2025%2f01%2f14%2fposter%2Ddai%2Dchien%2Dnguoi%2Dkhong%2Dlo%2D7%2D134240%2D140125%2D74.jpg",
      title: "Vùng Đất Câm Lặng 2",
      genres: ["Kinh dị", "Viễn tưởng"],
      duration: 97,
      ageRating: "T16",
      isHot: true,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2025%2f01%2f14%2fposter%2Ddai%2Dchien%2Dnguoi%2Dkhong%2Dlo%2D7%2D134240%2D140125%2D74.jpg",
      title: "Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận",
      genres: ["Hoạt hình", "Hành động"],
      duration: 117,
      ageRating: "T16",
      isHot: true,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2024%2f12%2f24%2fscreenshot%2D2024%2D12%2D24%2D142450%2D142935%2D241224%2D47.png",
      title: "John Wick 4",
      genres: ["Hành động", "Giật gân"],
      duration: 169,
      ageRating: "T18",
      isHot: true,
    },
    {
      image:
        "https://files.betacorp.vn/media%2fimages%2f2024%2f12%2f20%2f400x633%2D2%2D104903%2D201224%2D49.jpg",
      title: "Chú Chó Marley & Tôi",
      genres: ["Gia đình", "Tình cảm"],
      duration: 115,
      ageRating: "P",
      isHot: false,
    },
  ];

  const movieTabs = [
    {
      label: "PHIM SẮP CHIẾU",
      content: (
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "PHIM ĐANG CHIẾU",
      content: (
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "SUẤT CHIẾU ĐẶC BIỆT",
      content: (
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      {/* {loading && <Loader />}
      <Modal />
      <Cart />
      <ProductList products={products} /> */}
      {/* <Accordion items={accordionItems} />
      <LocationSelect />
      <ProfileDropdown />
      <ProfileDropdownClient /> */}

      {/* <div className="p-6">
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Open Modal
        </button>

        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          onSubmit={() => alert("Submitted!")}
          title="Lịch chiếu - Phim: Vùng Đất Câm Lặng 2"
          isFooter={false}
        >
          <TabShowtime idMovie={1} />
        </Modal>
      </div>

      <div className="hidden md:block">
        <Banner />
      </div>
      <div className="container">
        <Tabs
          tabs={movieTabs}
          defaultTab="PHIM ĐANG CHIẾU"
          onTabChange={(tab) => {
            console.log("Tab changed!", tab);
          }}
        />
      </div> */}

      {/* <MovieShowtimes /> */}

      <Showtime />
    </div>
  );
};

export default App;
