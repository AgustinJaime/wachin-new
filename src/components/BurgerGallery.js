import React, { useState } from "react"
import Lightbox from "react-image-lightbox"

import burger1 from "../images/burger-gallery/1.jpg"
import burger2 from "../images/burger-gallery/2.jpg"
import burger3 from "../images/burger-gallery/3.jpg"
import burger4 from "../images/burger-gallery/4.jpg"

const images = [burger1, burger2, burger3, burger4]

export const BurgerGallery = props => {
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <Lightbox
      mainSrc={images[photoIndex]}
      nextSrc={images[(photoIndex + 1) % images.length]}
      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
      onCloseRequest={props.close}
      onMovePrevRequest={() =>
        setPhotoIndex((photoIndex + images.length - 1) % images.length)
      }
      onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
    />
  )
}

export default BurgerGallery
