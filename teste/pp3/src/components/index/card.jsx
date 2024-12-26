
import React from 'react';
import festivais from '../../data/cardDados.js';


// function Card() {
//     return (
//       <div className="card-container">
//         {festivais.length > 0 &&
//           festivais.map((festival) => (
//             <div key={festival.id} className="card" style={{
//                 backgroundImage: `url(${festival.imagemFundo})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}>

//               <div className="av">
//                 <img src="/img/star.png" alt="star-icon" />
//                 <h6>{festival.nota}</h6>
//               </div>

//               <h3>{festival.nome}</h3>

//               <div className="data">
//                 <img src="/img/calendario.png" alt="calendario-icon" />
//                 <p>{festival.desc}</p>
//               </div>

//             </div>
//           ))}
//       </div>
//     );
//   }
  
//   export default Card;

//CARD FINAL

function Card() {
    return (
      <div className="card-container">
        {festivais.length > 0 &&
          festivais.map((festival) => (
            <div key={festival.id} className="card" 
            style={{
             backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.65),
             rgba(0, 0, 0, .3),
              rgba(255, 255, 255, 0)), url(${festival.imagemFundo})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',}}
            >

              <div className="av">
                <img src="/img/star.png" alt="star-icon" />
                <h3>{festival.nota}</h3>
              </div>

              <div className='mine-footer'>
              <h1>{festival.nome}</h1>

              <div className="data">
                <img src="/img/calendario.png" alt="calendario-icon" />
                <p>{festival.desc}</p>
              </div>
              </div>

            </div>
          ))}
      </div>
    );
  }
  
  export default Card;