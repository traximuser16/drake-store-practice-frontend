"use client";

import { useState, useEffect, useRef } from "react";

export default function clickOutside(initialIsHidden) {
  const [menuToggle, setToggle] = useState(initialIsHidden);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, menuToggle, setToggle };
}
