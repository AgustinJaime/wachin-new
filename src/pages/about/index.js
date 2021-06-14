import React, { useState } from "react"
import styles from "./about.module.css"

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
      <div className={styles.aboutContainer}>
        <div className={styles.about}>
          <p>
            <span>Wachin.tv es un hub de artistas audiovisuales</span>
            <br />
            interdisciplinario orientado a la publicidad donde conviven
            animadores, editores, programadores, directores y fotógrafos bajo la
            dirección creativa de Martín Pimentel y Bruno Bengen.
          </p>
          <br />
          <p>
            Ofrecemos contenido multimedia como: Video, animación 2d y 3d,
            fotografía, realidad aumentada, VFXs y motion graphics
          </p>
        </div>
        <footer className={styles.footer}>
          <p>
            Hecho desde México con amor.
            <br />
            Wachín 2020&#169;
          </p>
        </footer>
      </div>
    </Layout>
  )
}

export default AnimationPage
