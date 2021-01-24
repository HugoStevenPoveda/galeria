import React from 'react';
import Barner from './Barner';
import Pintura from './Pintura';
import img from './image/img'


import './styles/font.css'
import  "./styles/styles.scss";


const pinturas=[{
  "pintura":img.PinturaDALI,
  "pintor": img.dali,
  "nombre_pintor":"salvador Dalí",
  "nombre_pintura":"Construcción blanda con judías hervidas"
},
{
  "pintura":img.pinturaGOYA,
  "pintor": img.Francisco_de_Goya,
  "nombre_pintor":"Fransisco de Goya",
  "nombre_pintura":"La maja desnuda"
},
{
  "pintura":img.pinturaPICASSO,
  "pintor": img.picasso,
  "nombre_pintor":"Pablo Picasso",
  "nombre_pintura":"Las señoritas de Avignon"
},
{
  "pintura": img.pinturaVelzquez,
  "pintor": img.velazquez,
  "nombre_pintor":"Diego Velázquez",
  "nombre_pintura":"Las meninas"
},
{
  "pintura": img.pinturaBOTTICELLI,
  "pintor": img.Sandro_Botticelli,
  "nombre_pintor":"Sandro Botticelli",
  "nombre_pintura":"El nacimiento de Venus"
}



]



 



function App() {
  return (
    <>
     <Barner />
   <div className='ed-grid m-grid-4' id='cuadro'>

      {
      pinturas.map( picture => <Pintura pintura={picture.pintura} pintor={picture.pintor} nombre_pintor={picture.nombre_pintor}
      nombre_pintura={picture.nombre_pintura}

      />

      )  

      }
   </div> 
   

     

    </>
    
  );
}

export default App;
