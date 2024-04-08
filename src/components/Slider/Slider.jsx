"use client";
import { useEffect, useState } from "react";
import "./Slider.scss";

export default function Slider(props) {
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    const animate = setInterval(() => {
      currentItem === props.items.length - 1
        ? setCurrentItem(0)
        : setCurrentItem(currentItem + 1);
    }, 15000);
    return () => {
      clearInterval(animate);
    };
  });
  return (
    <div className='slider'>
      <div className='item'>
        <p>{props.items[currentItem].content}</p>
      </div>
    </div>
  );
}
