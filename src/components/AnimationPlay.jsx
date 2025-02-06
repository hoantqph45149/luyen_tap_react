import React from "react";

const AnimationPlay = () => {
  return (
    <div className="w-[70px] h-[70px] relative flex items-center justify-center">
      {/* Vòng tròn phát sáng */}
      <div className="absolute w-full h-full bg-[#e1e1e199] rounded-full animate-ping"></div>

      {/* Hình ảnh play video */}
      <img
        src="playvideo.png"
        alt="videoplay"
        className="relative z-10 w-[80%] h-[80%] bg-secondary rounded-full"
      />
    </div>
  );
};

export default AnimationPlay;
