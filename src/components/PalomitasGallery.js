import React, { useState } from "react"
import Lightbox from "react-image-lightbox"

import palomitas1 from "../images/palomitas-gallery/1.jpg"
import palomitas2 from "../images/palomitas-gallery/2.jpg"
import palomitas3 from "../images/palomitas-gallery/3.jpg"

const images = [palomitas1, palomitas2, palomitas3]

export const PalomitasGallery = props => {
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

export default PalomitasGallery
