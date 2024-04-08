import "./page.scss";
import Image from "next/image";
import contactIllustration from "../../../public/messenger.svg";
import Footer from "@/components/Footer/Footer";

export default function PageContact() {
  return (
    <div className='contact'>
      <section>
        <form action=''>
          <div className='form-group'>
            <label htmlFor='input-civility'>Société :</label>
            <br />
            <input type='text' id='input-civility' />
          </div>
          <div className='form-group'>
            <label htmlFor='civility-select'>Civilité : </label>
            <select name='civility' id='civility-select'>
              <option value=''>Aucun</option>
              <option value='mr'>Mr</option>
              <option value='mme'>Mme</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='input-lastname'>Nom :</label>
            <br />
            <input type='text' id='input-lastname' />
          </div>
          <div className='form-group'>
            <label htmlFor='input-firstname'>Prénom :</label>
            <br />
            <input type='text' id='input-firstname' />
          </div>
          <div className='form-group'>
            <label htmlFor='input-email'>Adresse e-mail :</label>
            <br />
            <input type='text' id='input-email' />
          </div>
          <div className='form-group'>
            <label htmlFor='input-tel'>Téléphone :</label>
            <br />
            <input type='text' id='input-tel' />
          </div>
          <div className='form-group'>
            <label htmlFor='input-message'>Racontez-nous votre projet :</label>
            <br />
            <textarea id='input-message'></textarea>
          </div>
          <button>Valider</button>
        </form>
        <Image
          className='contact-illustration'
          src={contactIllustration}
          alt=''
          priority={true}
        />
      </section>
    </div>
  );
}
