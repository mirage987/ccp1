import "./Header.scss";
import Image from "next/image";
import Nav from "../Nav/Nav";
import Logo from "/public/logo.svg";

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Image className='icon' src={Logo} alt='' priority={true} />
        <span className='text'>
          <strong>Rural Web Factory</strong>
        </span>
      </div>
      <Nav />
    </header>
  );
}
