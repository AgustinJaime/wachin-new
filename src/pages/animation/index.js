import React, { useState } from "react"
import styles from "./animation.module.css"

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
import CTA_BIO from "../../components/images/CTA/bio"

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
      <div className={styles.animationContainer}>
        <div
          className={styles.adidasContainer}
          style={{
            background: `url(${Cheetos2}) no-repeat center center / cover`,
          }}
          onClick={() => setPlayingVideo("cheetos")}
        >
          {/* <div
          className={styles.cheetosGallery}
          onClick={() => setOpenedGallery("cheetos")}
        >
          <CheetosStill1 className={styles.cheetos1} />
          <CheetosStill2 className={styles.cheetos2} />
          <CheetosStill3 className={styles.cheetos3} />
          <CheetosStill4 className={styles.cheetos4} />
        </div>
        <div className={styles.cheetos}>
          <img src={Cheetos2}></img>
        </div> */}
          <div
          // className={styles.cheetosVideo}
          >
            {/* <img src={Cheetos1}></img> */}
          </div>
          {/* <div className={`${styles.CTA_cheetos} ${styles.cta}`}>
          <CTA_Cheetos />
        </div> */}
        </div>
        <div
          className={styles.adidasContainer}
          style={{
            background: `url(${Adidas}) no-repeat center center / cover`,
          }}
          onClick={() => setPlayingVideo("adidas")}
        >
          <div
          // className={styles.adidas}
          >
            {/* <img src={Adidas}></img> */}
          </div>
          {/* <div className={`${styles.CTA_adidas} ${styles.cta}`}>
          <CTA_Adidas />
        </div> */}
        </div>
        <div
          className={styles.adidasContainer}
          style={{
            background: `url(${Adidas}) no-repeat center center / cover`,
          }}
          onClick={() => setPlayingVideo("adidas")}
        >
          {/* VERRRR */}
          {/* <div className={`${styles.CTA_bio} ${styles.cta}`}>
            <CTA_BIO />
          </div> */}
          <div
          // className={styles.adidas}
          >
            {/* <img src={Adidas}></img> */}
          </div>
          {/* <div className={`${styles.CTA_adidas} ${styles.cta}`}>
          <CTA_Adidas />
        </div> */}
        </div>
      </div>
      {playingVideo === "cheetos" && (
        <div className={styles.videoOverlay} onClick={clearPlayingVideo}>
          <span onClick={clearPlayingVideo}>&times;</span>
          <iframe
            src="https://player.vimeo.com/video/259506177?autoplay=1&title=0&byline=0&portrait=0"
            width="1200"
            height={matchPoints && matchPoints.md ? 400 : 675}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {playingVideo === "adidas" && (
        <div className={styles.videoOverlay} onClick={clearPlayingVideo}>
          <span onClick={clearPlayingVideo}>&times;</span>
          <iframe
            src="https://player.vimeo.com/video/268828753?autoplay=1&title=0&byline=0&portrait=0"
            width="1200"
            height={matchPoints && matchPoints.md ? 300 : 675}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </Layout>
  )
}

export default AnimationPage
