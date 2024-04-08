"use client";
import "./InfiniteSlider.scss";
import { useEffect } from "react";
import Image from "next/image";
import iconEslint from "/public/framework_icons/eslint.svg";
import iconExpress from "/public/framework_icons/express.svg";
import iconFirebase from "/public/framework_icons/firebase.svg";
import iconGithub from "/public/framework_icons/github.svg";
import iconGitlab from "/public/framework_icons/gitlab.svg";
import iconMaterialize from "/public/framework_icons/materialize.svg";
import iconMongodb from "/public/framework_icons/mongodb.svg";
import iconNextjs from "/public/framework_icons/nextjs.svg";
import iconNodejs from "/public/framework_icons/nodejs.svg";
import iconReact from "/public/framework_icons/react.svg";
import iconSvelte from "/public/framework_icons/svelte.svg";
import iconTailwindcss from "/public/framework_icons/tailwindcss.svg";
import iconVercel from "/public/framework_icons/vercel.svg";
import iconVue from "/public/framework_icons/vue.svg";
export default function InfiniteSlider() {
  const sliderItems = [
    { id: 1, path: iconEslint },
    { id: 2, path: iconExpress },
    { id: 3, path: iconFirebase },
    { id: 4, path: iconGithub },
    { id: 5, path: iconGitlab },
    { id: 6, path: iconMaterialize },
    { id: 7, path: iconMongodb },
    { id: 8, path: iconNextjs },
    { id: 9, path: iconNodejs },
    { id: 10, path: iconReact },
    { id: 11, path: iconSvelte },
    { id: 12, path: iconTailwindcss },
    { id: 13, path: iconVercel },
    { id: 14, path: iconVue },
  ];

  useEffect(() => {
    let animation;
    let endSlideAnimation;
    let slideAnimation;
    clearInterval(animation);
    clearTimeout(slideAnimation);
    clearTimeout(endSlideAnimation);
    const animate = () => {
      const icons = document.querySelectorAll(".infinite-slider-item");
      for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        slideAnimation = setTimeout(() => {
          icon.classList.add("slide");
          endSlideAnimation = setTimeout(() => {
            icon.classList.remove("slide");
          }, 15000);
        }, i * 3000);
      }
    };

    animation = setInterval(() => {
      animate();
    }, sliderItems.length * 3000);
    animate();
    return () => {
      clearInterval(animation);
      clearTimeout(slideAnimation);
      clearTimeout(endSlideAnimation);
    };
  });

  return (
    <div className='infinite-slider'>
      {sliderItems.map((item) => (
        <Image
          className='infinite-slider-item'
          src={item.path}
          alt=''
          priority={true}
          key={item.id.toString()}
        />
      ))}
    </div>
  );
}
