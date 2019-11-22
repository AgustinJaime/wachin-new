import React, { useState } from "react"
import Lightbox from "react-image-lightbox"

import bimbo1 from "../images/bimbo-gallery/1.jpg"
import bimbo2 from "../images/bimbo-gallery/2.jpg"
import bimbo3 from "../images/bimbo-gallery/3.jpg"
import bimbo4 from "../images/bimbo-gallery/4.jpg"

const images = [bimbo1, bimbo2, bimbo3, bimbo4]

export const BimboGallery = props => {
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

export default BimboGallery
