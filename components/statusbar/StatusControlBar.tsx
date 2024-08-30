"use client";
import React, { useState } from "react";
import Container from "./ui/Container";

type Props = {};

const StatusControlBar = (props: Props) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div
      className={`flex flex-col justify-center items-center w-full max-w-[480px] min-h-[100dvh] relative transition-all duration-1000 ${
        isToggled ? "bg-slate-100" : "bg-white"
      } `}
    >
      <div className="scale-[0.6] w-full flex justify-end -mb-4">
        <Container
          toggleButton
          caption="Night"
          otherCaption="Day"
          toggled
          setValue={setIsToggled}
        />
      </div>
      <div className="p-10">
        <div
          className={`flex flex-col justify-center items-center w-full transition-all duration-1000 ${
            isToggled ? "drop-shadow-md" : ""
          }`}
        >
          <div
            className={`text-lg p-1 font-medium select-none  text-white w-full text-left pl-2 rounded-x rounded-t duration-1000 transition-all ${
              isToggled ? "bg-[#5e4925]" : "bg-cyan-600"
            }`}
          >
            This is preview modal
          </div>
          <div
            className={`p-2 flex flex-col gap-1 border rounded-b text-sm tracking-tight cursor-default select-none transition-all duration-1000 ${
              isToggled ? "bg-[#f5f4f3]" : "bg-white"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            suscipit facere consectetur molestias non ducimus et exercitationem
            nam dicta! Deserunt quia neque amet vero quidem nihil voluptatem
            dolores cumque facere?
            <span className="text-xs tracking-wide">
              created by:{" "}
              <b className={isToggled ? "" : "text-cyan-700 cursor-pointer"}>
                <a
                  className="appearance-none"
                  href="https://www.linkedin.com/in/baidar-gul-6a10b977/"
                  target="_blank"
                >
                  @baidar gul
                </a>
              </b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusControlBar;
