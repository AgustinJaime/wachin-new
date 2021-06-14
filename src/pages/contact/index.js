import React, { useState } from "react"
import styles from "./contact.module.css"

import Layout from "../../components/layout"
import useBreakpoint from "../../helpers/useBreakpointHook"

import Cheetos1 from "../../images/cheetos1.gif"
import Cheetos2 from "../../images/cheetos2.gif"
import Adidas from "../../images/adidas.gif"

import CheetosStill1 from "../../components/images/cheetosStill1"
import CheetosStill2 from "../../components/images/cheetosStill2"
import CheetosStill3 from "../../components/images/cheetosStill3"
import CheetosStill4 from "../../components/images/cheetosStill4"

import CTA_Cheetos from "../../components/images/CTA/cheetos"
import CTA_Adidas from "../../components/images/CTA/adidas"

const queries = {
  xs: "(max-width: 320px)",
  md: "(max-width: 870px)",
  lg: "(max-width: 1440px)",
}

const AnimationPage = props => {
  //   const matchPoints = useBreakpoint(queries)
  const [openedGallery, setOpenedGallery] = useState(null)
  const [playingVideo, setPlayingVideo] = useState("")
  const clearPlayingVideo = () => setPlayingVideo("")
  const matchPoints = useBreakpoint(queries)

  //   const closeGallery = () => {
  //     setOpenedGallery(null)
  //     window.scrollTo(0, document.documentElement.scrollTop)
  //   }
  //   const clearPlayingVideo = () => setPlayingVideo("")
  //   const [backToTopStyles, setBackToTopStyles] = useState({})
  //   const scrollToTop = () => window.scrollTo(0, 0)

  return (
    <Layout noscroll={!!playingVideo || !!openedGallery}>
      <div className={styles.contactContainer}>
        <div className={styles.contact}>
          <p>
            <span>Contact:</span>
          </p>
          <br />
          <p>
            <span> Oficina:</span> General Salvador Alvarado 80, Miguel Hidalgo,
            CDMX, México
          </p>
          <br />
          <p>
            <span>Tel:</span> +52-55-9196-3035
          </p>
          <br />
          <p>
            <span>Mail:</span> martin@wachin.tv / bruno@wachin.tv
          </p>
          <br />
          <p>
            <span>Instagram:</span> @wachin.tv
          </p>
          <br />
          <p>
            <span>Vimeo:</span> vimeo.com/wachin-tv
          </p>
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default AnimationPage
