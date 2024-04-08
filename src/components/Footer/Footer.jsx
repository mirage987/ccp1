import "./Footer.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <Link href='/'>2016 Agence web Rural Web Factory</Link>
        <Link href='/'>Mentions légales</Link>
        <Link href='/'>Conditions générales d{"\u2019"}utilisations</Link>
        <Link href='/'>Politique de confidentialité</Link>
      </div>
    </footer>
  );
}
