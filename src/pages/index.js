import React, { useState } from "react"
import useBreakpoint from "../helpers/useBreakpointHook"
import { useScrollPosition } from "../helpers/useScrollPositionHook"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Firulete1 from "../components/images/firulete1"
import LogoWachin from "../components/images/logo-wachin"
import Contact from "../components/images/contact"
import ContactPopup from "../components/images/contact_popup"
import NYPD from "../components/images/nypd"
import HardCandy from "../components/images/hard-candy"
import Firulete2 from "../components/images/firulete2"
import Uber from "../images/uber.gif"
import Speedy from "../images/speedy.gif"
import Chica1 from "../components/images/chica-1"
import Chica2 from "../components/images/chica-2"
import Corazon from "../components/images/corazon"
import Burger from "../images/hamburguesa.gif"
import Cheetos1 from "../images/cheetos1.gif"
import Cheetos2 from "../images/cheetos2.gif"
import Firulete3 from "../components/images/firulete3"
import Firulete4 from "../components/images/firulete4"
import Adidas from "../images/adidas.gif"
import Cata from "../components/images/cata"
import Firulete5 from "../components/images/firulete5"
import Supreme from "../components/images/supreme"
import Firulete6 from "../components/images/firulete6"
import Army from "../components/images/army"
import Firulete7 from "../components/images/firulete7"
import Firulete8 from "../components/images/firulete8"
import Unicef from "../images/unicef.gif"
import Wikichin from "../components/images/wikichin"
import CheetosStill1 from "../components/images/cheetosStill1"
import CheetosStill2 from "../components/images/cheetosStill2"
import CheetosStill3 from "../components/images/cheetosStill3"
import CheetosStill4 from "../components/images/cheetosStill4"
import BimboStill1 from "../components/images/bimboStill1"
import BimboStill2 from "../components/images/bimboStill2"
import BimboStill3 from "../components/images/bimboStill3"
import BimboStill4 from "../components/images/bimboStill4"
import CliniqueStill1 from "../components/images/cliniqueStill1"
import CliniqueStill2 from "../components/images/cliniqueStill2"
import CliniqueStill3 from "../components/images/cliniqueStill3"
import CliniqueStill4 from "../components/images/cliniqueStill4"
import CliniqueStill5 from "../components/images/cliniqueStill5"
import CliniqueStill6 from "../components/images/cliniqueStill6"
import PalomitasStill1 from "../components/images/palomitasStill1"
import PalomitasStill2 from "../components/images/palomitasStill2"
import PalomitasStill3 from "../components/images/palomitasStill3"
import BackToTop from "../components/images/backToTop"
import Firulete9 from "../components/images/firulete9"
import Firulete10 from "../components/images/firulete10"

import CTA_Spotify from "../components/images/CTA/spotify"
import CTA_BIO from "../components/images/CTA/bio"
import CTA_Chino from "../components/images/CTA/chino"
import CTA_Rocklets from "../components/images/CTA/rocklets"
import CTA_Videos from "../components/images/CTA/videos"
import CTA_Rubia from "../components/images/CTA/rubia"
import CTA_Burger from "../components/images/CTA/burger"
import CTA_Adidas from "../components/images/CTA/adidas"
import CTA_Cata from "../components/images/CTA/cata"
import CTA_Army from "../components/images/CTA/army"
import CTA_Unicef from "../components/images/CTA/unicef"
import CTA_Clinique from "../components/images/CTA/clinique"
import CTA_Palomitas from "../components/images/CTA/palomitas"
import CTA_Cheetos from "../components/images/CTA/cheetos"
import CTA_Bimbo from "../components/images/CTA/bimbo"

import CheetosGallery from "../components/CheetosGallery"
import BimboGallery from "../components/BimboGallery"
import RockletsGallery from "../components/RockletsGallery"
import CliniqueGallery from "../components/CliniqueGallery"
import PalomitasGallery from "../components/PalomitasGallery"
import BurgerGallery from "../components/BurgerGallery"

import "react-image-lightbox/style.css"
import "./styles.css"
import styles from "./index.module.css"

const queries = {
  xs: "(max-width: 320px)",
  md: "(max-width: 870px)",
  lg: "(max-width: 1440px)",
}

const IndexPage = () => {
  const matchPoints = useBreakpoint(queries)
  const [openedGallery, setOpenedGallery] = useState(null)
  const closeGallery = () => {
    setOpenedGallery(null)
    window.scrollTo(0, window.scrollY)
  }
  const [playingVideo, setPlayingVideo] = useState("")
  const clearPlayingVideo = () => setPlayingVideo("")
  const [backToTopStyles, setBackToTopStyles] = useState({})
  const scrollToTop = () => window.scrollTo(0, 0)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y < -400
      const shouldBeStyle = {
        transform: isVisible ? "translateX(0)" : "translateX(300px)",
        transition: isVisible
          ? "transform 200ms ease-out"
          : "transform 200ms ease-in",
      }
      if (JSON.stringify(shouldBeStyle) === JSON.stringify(backToTopStyles)) {
        return
      }
      setBackToTopStyles(shouldBeStyle)
    },
    [backToTopStyles]
  )

  return (
    <>
      <Layout noscroll={!!playingVideo}>
        <SEO title="Home" />
        <div className={styles.firulete1}>
          <Firulete1 />
        </div>
        <h1>
          <div className={styles.logo}>
            <LogoWachin />
            <div className={`${styles.CTA_chino} ${styles.cta}`}>
              <CTA_Chino />
            </div>
          </div>
        </h1>
        <div className={styles.contactContainer}>
          <div className={styles.contact}>
            <Contact />
          </div>
          <div className={styles.contactPopup}>
            <ContactPopup />
          </div>
        </div>

        <div className={styles.textAndSpotifyContainer}>
          <div className={styles.textContainer}>
            <p className={styles.paragraph}>
              Wachín es el alter ego de
              <br />
              <strong>Martín Pimentel + Bruno Bengen</strong>
              <br />
              <br />
              Siempre divertido, nunca indivertido.
              <br />
              Esta dupla argentina combina una narrativa innovadora
              <br />
              con un toque fresco y sexy. Buscando crear impacto, encaran
              <br />
              todos los proyectos con una tendencia por la innovación
              <br />
              en el discurso y la técnica. Combinan distintas disciplinas,
              <br />
              cómo la foto, el video y la animación aplicándolo a contenidos
              <br />
              tradicionales y no tradicionales, aspirando siempre a la mejor
              <br />
              calidad. Su trabajo se caracteriza por hacer de cada proyecto
              <br />
              una historia única. Desde México para todo el mundo.
            </p>
            <div className={`${styles.CTA_bio} ${styles.cta}`}>
              <CTA_BIO />
            </div>
          </div>
          {matchPoints && !matchPoints.md && (
            <>
              <div className={styles.spotify}>
                <iframe
                  title="SpotifyIframe"
                  src="https://open.spotify.com/embed/playlist/0Mv0b9aQLuyEUU5oSKzsrF"
                  width="300"
                  height="380"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className={`${styles.CTA_spotify} ${styles.cta}`}>
                <CTA_Spotify />
              </div>
            </>
          )}
        </div>
        <div className={styles.nypdContainer}>
          <div className={styles.nypd}>
            <NYPD />
          </div>
          <div className={styles.rockletsContainer}>
            <div
              className={styles.hardCandy}
              onClick={() => setOpenedGallery("rocklets")}
            >
              <HardCandy />
            </div>
            <div className={`${styles.CTA_rocklets} ${styles.cta}`}>
              <CTA_Rocklets />
            </div>
          </div>
        </div>
        <div className={styles.firulete2}>
          <Firulete2 />
        </div>
        <div className={styles.uber} onClick={() => setPlayingVideo("uber")}>
          <img src={Uber}></img>
        </div>
        <div
          className={styles.speedy}
          onClick={() => setPlayingVideo("speedy")}
        >
          <img src={Speedy}></img>
        </div>
        <div className={`${styles.CTA_videos} ${styles.cta}`}>
          <CTA_Videos />
        </div>
        <div className={styles.chica1}>
          <Chica1 />
        </div>
        <div className={`${styles.CTA_rubia} ${styles.cta}`}>
          <CTA_Rubia />
        </div>
        <div className={styles.chica2}>
          <Chica2 />
        </div>
        <div className={styles.burgerContainer}>
          <div className={styles.corazon}>
            <Corazon />
          </div>
          <div
            className={styles.burger}
            onClick={() => setOpenedGallery("burger")}
          >
            <img src={Burger}></img>
          </div>
        </div>
        <div className={`${styles.CTA_burger} ${styles.cta}`}>
          <CTA_Burger />
        </div>
        <div className={styles.cheetosContainer}>
          <div
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
          </div>
          <div
            className={styles.cheetosVideo}
            onClick={() => setPlayingVideo("cheetos")}
          >
            <img src={Cheetos1}></img>
          </div>
          <div className={`${styles.CTA_cheetos} ${styles.cta}`}>
            <CTA_Cheetos />
          </div>
        </div>
        <div className={styles.firulete3}>
          <Firulete3 />
        </div>
        <div className={styles.firulete4}>
          <Firulete4 />
        </div>
        <div className={styles.adidasContainer}>
          <div
            className={styles.adidas}
            onClick={() => setPlayingVideo("adidas")}
          >
            <img src={Adidas}></img>
          </div>
          <div className={`${styles.CTA_adidas} ${styles.cta}`}>
            <CTA_Adidas />
          </div>
        </div>
        <div className={styles.cataContainer}>
          <div className={styles.cata}>
            <Cata />
          </div>
          <div className={`${styles.CTA_cata} ${styles.cta}`}>
            <CTA_Cata />
          </div>
        </div>
        <div className={styles.bimboContainer}>
          <div
            className={styles.bimboGallery}
            onClick={() => setOpenedGallery("bimbo")}
          >
            <BimboStill1 className={styles.bimbo1} />
            <BimboStill2 className={styles.bimbo2} />
            <BimboStill3 className={styles.bimbo3} />
            <BimboStill4 className={styles.bimbo4} />
          </div>
          <div className={`${styles.CTA_bimbo} ${styles.cta}`}>
            <CTA_Bimbo />
          </div>
        </div>
        <div className={styles.firulete5}>
          <Firulete5 />
        </div>
        <div className={styles.supreme}>
          <Supreme />
        </div>
        <div className={styles.firulete6}>
          <Firulete6 />
        </div>
        <div className={styles.armyContainer}>
          <div className={styles.army}>
            <Army />
          </div>
          <div className={`${styles.CTA_army} ${styles.cta}`}>
            <CTA_Army />
          </div>
        </div>
        <div className={styles.firulete7}>
          <Firulete7 />
        </div>
        <div className={styles.firulete8}>
          <Firulete8 />
        </div>
        <div
          className={styles.unicef}
          onClick={() => setPlayingVideo("unicef")}
        >
          <img src={Unicef}></img>
        </div>
        <div className={`${styles.CTA_unicef} ${styles.cta}`}>
          <CTA_Unicef />
        </div>
        <div
          className={styles.cliniqueGallery}
          onClick={() => setOpenedGallery("clinique")}
        >
          <CliniqueStill1 className={styles.clinique1} />
          <CliniqueStill2 className={styles.clinique2} />
          <CliniqueStill3 className={styles.clinique3} />
          <CliniqueStill4 className={styles.clinique4} />
          <CliniqueStill5 className={styles.clinique5} />
          <CliniqueStill6 className={styles.clinique6} />
        </div>
        <div className={`${styles.CTA_clinique} ${styles.cta}`}>
          <CTA_Clinique />
        </div>
        <div
          className={styles.palomitasGallery}
          onClick={() => setOpenedGallery("palomitas")}
        >
          <PalomitasStill1 className={styles.palomitas1} />
          <PalomitasStill2 className={styles.palomitas2} />
          <PalomitasStill3 className={styles.palomitas3} />
        </div>
        <div className={`${styles.CTA_palomitas} ${styles.cta}`}>
          <CTA_Palomitas />
        </div>
        <div className={styles.wikichin}>
          <Wikichin />
        </div>
        <div className={styles.firulete9}>
          <Firulete9 />
        </div>
        <div className={styles.firulete10}>
          <Firulete10 />
        </div>
        <footer className={styles.footer}>
          <p>Hecho desde México con amor - 2019</p>
        </footer>
      </Layout>

      <div
        className={styles.backToTop}
        style={{ ...backToTopStyles }}
        onClick={scrollToTop}
      >
        <BackToTop />
      </div>

      {openedGallery === "cheetos" && <CheetosGallery close={closeGallery} />}
      {openedGallery === "bimbo" && <BimboGallery close={closeGallery} />}
      {openedGallery === "rocklets" && <RockletsGallery close={closeGallery} />}
      {openedGallery === "clinique" && <CliniqueGallery close={closeGallery} />}
      {openedGallery === "palomitas" && (
        <PalomitasGallery close={closeGallery} />
      )}
      {openedGallery === "burger" && <BurgerGallery close={closeGallery} />}

      {playingVideo === "speedy" && (
        <div className={styles.videoOverlay} onClick={clearPlayingVideo}>
          <span onClick={clearPlayingVideo}>&times;</span>
          <iframe
            src="https://player.vimeo.com/video/185378818?autoplay=1&title=0&byline=0&portrait=0"
            width="1200"
            height={matchPoints && matchPoints.md ? 400 : 675}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}

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

      {playingVideo === "uber" && (
        <div className={styles.videoOverlay} onClick={clearPlayingVideo}>
          <span onClick={clearPlayingVideo}>&times;</span>
          <iframe
            src="https://player.vimeo.com/video/363331676?autoplay=1&title=0&byline=0&portrait=0"
            width="1200"
            height={matchPoints && matchPoints.md ? 300 : 675}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {playingVideo === "unicef" && (
        <div className={styles.videoOverlay} onClick={clearPlayingVideo}>
          <span onClick={clearPlayingVideo}>&times;</span>
          <iframe
            src="https://player.vimeo.com/video/330861127?autoplay=1&title=0&byline=0&portrait=0"
            width="1200"
            height={matchPoints && matchPoints.md ? 300 : 675}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  )
}

export default IndexPage
