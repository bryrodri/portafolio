import React from 'react'
import './slide.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slide = (props) => {
  return (
    <Carousel showThumbs={false} showStatus={false} className="slide-secction">

      {
          props.images.map(x=>{
            return <div key={x.id}><img src={x.direccion} alt="imagen de proyecto" /></div>

          })
      }



</Carousel>




  )
}

export default Slide
