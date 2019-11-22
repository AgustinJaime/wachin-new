import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Firulete1 from "../components/images/firulete1"
import LogoWachin from "../components/images/logo-wachin"
import Contact from "../components/images/contact"
import NYPD from "../components/images/nypd"
import HardCandy from "../components/images/hard-candy"
import Firulete2 from "../components/images/firulete2"
import Uber from "../images/uber.gif"
import Speedy from "../images/speedy.gif"
import Chica from "../components/images/chica"
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
import Unicef from "../components/images/unicef"
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
// import InteractiveImage from "../components/interactiveImage/interactiveImage"

import CheetosGallery from "../components/CheetosGallery"
import BimboGallery from "../components/BimboGallery"
import RockletsGallery from "../components/RockletsGallery"
import CliniqueGallery from "../components/CliniqueGallery"
import PalomitasGallery from "../components/PalomitasGallery"
import BurgerGallery from "../components/BurgerGallery"

import "react-image-lightbox/style.css"
import "./styles.css"
import styles from "./index.module.css"

const IndexPage = () => {
  const [openedGallery, setOpenedGallery] = useState(null)
  const closeGallery = () => setOpenedGallery(null)

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div className={styles.firulete1}>
          <Firulete1 />
        </div>
        <h1>
          <div className={styles.logo}>
            <LogoWachin />
          </div>
        </h1>
        <div className={styles.contact}>
          <Contact />
        </div>

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
        </div>
        <div className={styles.nypdContainer}>
          <div className={styles.nypd}>
            <NYPD />
          </div>
          <div
            className={styles.hardCandy}
            onClick={() => setOpenedGallery("rocklets")}
          >
            <HardCandy />
          </div>
        </div>
        <div className={styles.firulete2}>
          <Firulete2 />
        </div>
        <div className={styles.uber}>
          <img src={Uber}></img>
        </div>
        <div className={styles.speedy}>
          <img src={Speedy}></img>
        </div>
        <div className={styles.chica}>
          <Chica />
        </div>
        <div
          className={styles.burger}
          onClick={() => setOpenedGallery("burger")}
        >
          <img src={Burger}></img>
        </div>
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
        <div className={styles.cheetosVideo}>
          <img src={Cheetos1}></img>
        </div>
        <div className={styles.firulete3}>
          <Firulete3 />
        </div>
        <div className={styles.firulete4}>
          <Firulete4 />
        </div>
        <div className={styles.adidas}>
          <img src={Adidas}></img>
        </div>
        <div className={styles.cata}>
          <Cata />
        </div>
        <div
          className={styles.bimboGallery}
          onClick={() => setOpenedGallery("bimbo")}
        >
          <BimboStill1 className={styles.bimbo1} />
          <BimboStill2 className={styles.bimbo2} />
          <BimboStill3 className={styles.bimbo3} />
          <BimboStill4 className={styles.bimbo4} />
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
        <div className={styles.army}>
          <Army />
        </div>
        <div className={styles.firulete7}>
          <Firulete7 />
        </div>
        <div className={styles.firulete8}>
          <Firulete8 />
        </div>
        <div className={styles.unicef}>
          <Unicef />
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
        <div
          className={styles.palomitasGallery}
          onClick={() => setOpenedGallery("palomitas")}
        >
          <PalomitasStill1 className={styles.palomitas1} />
          <PalomitasStill2 className={styles.palomitas2} />
          <PalomitasStill3 className={styles.palomitas3} />
        </div>
        <div className={styles.wikichin}>
          <Wikichin />
        </div>
        <div className={styles.firulete9}>
          <Firulete9 />
        </div>
        <div className={styles.backToTop}>
          <BackToTop />
        </div>
        <div className={styles.firulete10}>
          <Firulete10 />
        </div>
        <footer className={styles.footer}>
          <p>Hecho desde México con amor - 2019</p>
        </footer>
      </Layout>

      {openedGallery === "cheetos" && <CheetosGallery close={closeGallery} />}
      {openedGallery === "bimbo" && <BimboGallery close={closeGallery} />}
      {openedGallery === "rocklets" && <RockletsGallery close={closeGallery} />}
      {openedGallery === "clinique" && <CliniqueGallery close={closeGallery} />}
      {openedGallery === "palomitas" && (
        <PalomitasGallery close={closeGallery} />
      )}
      {openedGallery === "burger" && <BurgerGallery close={closeGallery} />}
    </>
  )
}

export default IndexPage
