"use client";
import "./Nav.scss";
import styles from "@/app/page.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNavIsOpen = () => {
    setNavIsOpen(!navIsOpen);
  };
  useEffect(() => {
    const toggleNav = document.querySelector(".toggle-nav");
    const nav = document.querySelector("nav.nav");
    const links = document.querySelectorAll(".link");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        setNavIsOpen(false);
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        if (navIsOpen) {
          toggleNav.classList.remove("close");
          toggleNav.classList.add("open");

          nav.classList.remove("open");
          nav.classList.add("close");
          setNavIsOpen(false);
        }
      }
    });
  });

  return (
    <>
      <nav className={`nav ${navIsOpen ? "open" : "close"}`}>
        <ul className='list'>
          <li className='item'>
            <Link className={`${styles.btn} link`} href='/'>
              Accueil
            </Link>
          </li>
          <li className='item'>
            <Link className='link' href='/'>
              item 2
            </Link>
          </li>
          <li className='item'>
            <Link className='link' href='/'>
              item 3
            </Link>
          </li>
          <li className='item'>
            <Link className='link' href='/'>
              item 4
            </Link>
          </li>
          <li className='item'>
            <Link className='link' href='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`toggle-nav ${navIsOpen ? "close" : "open"} `}
        onClick={toggleNavIsOpen}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>
    </>
  );
}
