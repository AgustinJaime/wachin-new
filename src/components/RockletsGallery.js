import React, { useState } from "react"
import Lightbox from "react-image-lightbox"

import rocklets1 from "../images/rocklets-gallery/1.jpg"
import rocklets2 from "../images/rocklets-gallery/2.jpg"
import rocklets3 from "../images/rocklets-gallery/3.jpg"
import rocklets4 from "../images/rocklets-gallery/4.jpg"
import rocklets5 from "../images/rocklets-gallery/5.jpg"
import rocklets6 from "../images/rocklets-gallery/6.jpg"

const images = [
  rocklets1,
  rocklets2,
  rocklets3,
  rocklets4,
  rocklets5,
  rocklets6,
]

export const RockletsGallery = props => {
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

export default RockletsGallery
