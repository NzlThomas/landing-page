import './App.css'
import { SlArrowDown } from "react-icons/sl";

function App() {

  return (
    <>
      <div>
        <header className='header'>
          <p>Crew 404</p>
        </header>
        <body>
          <section className='backgroundC'>

          <div className='image-text'>
          <p className='desc-text'>La famille va bientôt s'agrandir !</p>
          <img src='../public/baby.png' alt='Silhouette de bébé.' className='baby-pic'/>
          </div>
          <div className='coupon'>
            <p>
            Pour fêter cela, obtenez 20% de
réduction sur notre catalogue avec
le code BABY404 !
            </p>
            <SlArrowDown color='white' size={40}/>
          </div>
          </section>
          <div className='shop'>
            <p>Les parents les conseillent
            fortement :</p>
              <div>
              <img />
              <p>Casque antibruit</p>
              </div>
              <div>
              <img />
              <p>Infusions sommeil</p>
              </div>
              <button type='button'>Voir catalogue complet</button>
            
          </div>
        </body>
      </div>
    </>
  )
}

export default App
