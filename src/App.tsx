import './App.css'
import { SlArrowDown } from "react-icons/sl";

function App() {

 const handleClick = () => {
  alert("Quel panier d'ailleurs ?")
  }

  const handleCatalogueClick = () => {
    alert("Si y a pas de panier y a pas de catalogue, 2 articles c'était le max pour mon inspiration.")
  }

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
          </div>
          <div className='advice'>
            <p >Les parents les conseillent
            fortement :</p>
            <SlArrowDown color='white' size={40} className='arrow'/>
            </div>
            
          </section>
          <div className='shop'>
              <div className='card'>

              <img src='../public/casque.png' className='article'/>
              <p>Casque antibruit</p>
              <p>49,99 €</p>
              <button type='button' onClick={handleClick}>Ajouter au panier</button>

              </div>

              <div className='card'>
              <img src='../public/infusion.png' className='article'/>
              <p>Infusions sommeil</p>
              <p>4,99 €</p>
              <button type='button' onClick={handleClick}>Ajouter au panier</button>
              </div>

              <button type='button' onClick={handleCatalogueClick}>Voir catalogue complet</button>
            
          </div>
        </body>
      </div>
    </>
  )
}

export default App
