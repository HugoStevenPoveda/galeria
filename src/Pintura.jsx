import React from 'react';



const Pintura =({pintura,pintor,nombre_pintor,nombre_pintura})=>(
    <>
<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src={pintura} alt=""/>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
     {nombre_pintura}
    
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src={pintor} alt=""/>
          </div>
        </div>
        <span className="small">{ nombre_pintor}</span>
      </div>
    </div>
    <div className="s-main-center">
     
    </div>
  </div>
</article>


    </>
)


export default Pintura;







