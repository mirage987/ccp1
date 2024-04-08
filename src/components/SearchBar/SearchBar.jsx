import "./SearchBar.scss";
import Image from "next/image";
import SearchIcon from "/public/icons/icons8-chercher.svg";

export default function SearchBar() {
  return (
    <div className='search-bar'>
      <input type='search' placeholder='Rechercher quelque chose' />
      <button>
        <Image src={SearchIcon} alt='' priority={true} />
      </button>
    </div>
  );
}
