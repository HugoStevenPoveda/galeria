import React from 'react';
import barner from './image/barner.jpg';
import './styles/font.css'

const Barner =()=>(
<>

<div className="main-banner img-container dark-color" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src={barner} />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0" id="title" >GALERY</p>
        <p className="font">La perfección no es cosa pequeña, pero está hecha de pequeñas cosas. </p>
            <p>miguel angel buonarroti</p>
        
      </div>
    </div>
  </div>
</div>




</>






)

export default Barner