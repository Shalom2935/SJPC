import React from 'react'
import '../../index.scss';
import '../../components/Header/Header.js';
import Header from '../../components/Header/Header.js';
import '../../components/Footer/Footer';
import Footer from '../../components/Footer/Footer';
import ButtonLarge from '../../components/Buttons/buttonLarge';


function Home() {
  return (
    <div>
    <Header />
      <div className='hero'>
        <div className='hero-text'>
          <h2 className='hero-text--slogan'>
            JE SUIS CE QUE JE SUIS GRACE A CE QUE NOUS SOMMES TOUS
          </h2>
          <h1 className='hero-text--title'>St Jerome <br></br>Polytechnic Community</h1>
          <p>
          SJP Community est une association à but non lucratif, qui réunit les étudiants de Saint Jérôme polytechnique dans le but de les accompagner tout au long de leur formation et faciliter leur insertion dans le milieu professionnel
          </p>
          <ButtonLarge />
        </div>
      </div>
      <div className='missions'>
        <h1>Nos Missions</h1>
        <div className='missions-list'>
          <div className='missions-list--solidarite'>
            <div className='handshaken-icon'></div>
            <h2>Solidarité</h2>
            <p>
            Promouvoir la solidarité entre les différentes générations d’étudiants formés à Saint Jérôme Polytechnique et entre les 
            étudiants et leurs enseignants
            </p>
          </div>
          <div className='missions-list--integration'>
            <div className='objective-icon'></div>
            <h2>Intégration</h2>
            <p>
            Faciliter l’intégration socio-professionnelle 
            des Ingénieurs et cadres de SJP au
            Cameroun et à l’étranger à travers
            des réseaux d’opportunités
            </p>
          </div>
          <div className='missions-list--emergency'>
            <div className='emergency-icon'>
            {/* <img src={process.env.PUBLIC_URL + 'icons/handshake.svg'} alt="logo" /> */}
            </div>
            <h2>Emergence économique</h2>
            <p>
            Participer de manière significative au developpement et à l’émergence économique du Cameroun
            </p>
          </div>
        </div>
      </div>
      <div className='newsletter'>
        <div className='wrapper'>
          <h2>SOUSCRIRE A NOTRE NEWSLETTER POUR RESTER INFORME DE NOS ACTIVITES</h2>
          <form>
            <input type="text" placeholder='xyz@gmail.com'/>
            <button>SOUSCRIRE</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home