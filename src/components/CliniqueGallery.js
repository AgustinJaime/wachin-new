import React, { useState } from "react"
import Lightbox from "react-image-lightbox"

import clinique1 from "../images/clinique-gallery/1.jpg"
import clinique2 from "../images/clinique-gallery/2.jpg"
import clinique3 from "../images/clinique-gallery/3.jpg"
import clinique4 from "../images/clinique-gallery/4.jpg"
import clinique5 from "../images/clinique-gallery/5.jpg"
import clinique6 from "../images/clinique-gallery/6.jpg"

const images = [
  clinique1,
  clinique2,
  clinique3,
  clinique4,
  clinique5,
  clinique6,
]

export const CliniqueGallery = props => {
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

export default CliniqueGallery
