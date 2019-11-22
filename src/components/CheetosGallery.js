import React, { useState } from "react"
import Lightbox from "react-image-lightbox"

import cheetos1 from "../images/cheetos-gallery/1.jpg"
import cheetos2 from "../images/cheetos-gallery/2.jpg"
import cheetos3 from "../images/cheetos-gallery/3.jpg"
import cheetos4 from "../images/cheetos-gallery/4.jpg"

const images = [cheetos1, cheetos2, cheetos3, cheetos4]

export const CheetosGallery = props => {
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

export default CheetosGallery
