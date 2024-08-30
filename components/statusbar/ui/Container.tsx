"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
type Props = {
  caption?: string;
  otherCaption?: string;
  onClick?: () => void;
  toggleButton?: boolean;
  toggled?: boolean;
  setValue?: any;
};

const Container = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    if (isToggled) {
      setIsToggled((prev: any) => false);
      changeToNight();
    } else {
      setIsToggled((prev: any) => true);
      changeToDay();
    }
    if (props.setValue) props.setValue(isToggled);
  };

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }

    if (props.toggleButton) {
      handleToggle();
    }
  };

  function initializeAnimation() {
    const tl = gsap.timeline();

    tl.from("#inner", {
      boxShadow: "rgb(0 0 0 / 0%) 0px 0px 9px 0px inset",
    });

    tl.to("#outer", {
      opacity: 1,
      duration: 0.5,
      width: "70px",
      height: "70px",
    });
    tl.to("#inner", {
      opacity: 1,
      duration: 0.5,
      width: "60px",
      height: "60px",
    });

    tl.to("#outer", {
      opacity: 1,
      duration: 0.5,
      width: "180px",
      height: "70px",
    });

    tl.to("#inner", {
      opacity: 1,
      duration: 0.5,
      width: "168px",
      height: "56px",
    });

    tl.to("#toggleButton", {
      opacity: 1,
      duration: 0.5,
      width: "32px",
      height: "32px",
    });
    tl.to("#toggleButton", {
      opacity: 1,
      duration: 1,
      xPercent: 120,
    });

    tl.to("#Title", {
      opacity: 1,
      duration: 0.5,
      xPercent: -80,
    });
    tl.to("#inner", {
      border: "1px solid #0000000a",
    });
    tl.to("#outer", {
      opacity: 0,
      duration: 1,
    });
  }

  const changeToNight = () => {
    const tl = gsap.timeline();
    tl.to("#Title", {
      xPercent: 140,
      opacity: 1,
    });
    tl.to("#toggleButton", {
      xPercent: -220,
    });
  };

  const changeToDay = () => {
    const tl = gsap.timeline();
    tl.to("#Title", {
      xPercent: -40,
    });
    tl.to("#toggleButton", {
      xPercent: 120,
    });
  };

  useEffect(() => {
    initializeAnimation();
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (props.toggled) {
        setIsToggled(props.toggled ? true : false);
      }
    }
  }, [isMounted]);

  return (
    <button
      onClick={handleClick}
      className={`relative flex justify-center items-center select-none group cursor-pointer active:scale-90 transition-all duration-100`}
    >
      <div
        id="outer"
        className="absolute bg-zinc-300 w-0 h-0 opacity-0 rounded-full flex justify-center items-center"
      ></div>
      <div
        id="inner"
        className={`absolute border-[1px] border-transparent inset ${
          isToggled ? "bg-zinc-100" : "bg-zinc-700"
        }  w-0 h-0 opacity-0 rounded-full`}
      ></div>
      <div
        id="Title"
        className={`absolute right-0 font-semibold tracking-wide text-base transition-all duration-700 ${
          isToggled ? "text-zinc-700" : "text-white"
        }  text-nowrap opacity-0`}
      >
        {props.toggleButton
          ? isToggled
            ? props.otherCaption
            : props.caption
          : props.caption
          ? props.caption
          : "Title"}
      </div>
      <div
        id="toggleButton"
        className={`absolute w-0 h-0 left-0 opacity-0 transition-all duration-1000 rounded-full ${
          isToggled ? "bg-yellow-500" : "group-hover:bg-zinc-100 bg-zinc-300"
        }`}
      ></div>
    </button>
  );
};

export default Container;
