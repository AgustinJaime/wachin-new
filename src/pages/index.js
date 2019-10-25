import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Firulete1 from "../components/images/firulete1"
import LogoWachin from "../components/images/logo-wachin"
import Contact from "../components/images/contact"
import NYPD from "../components/images/nypd"
import HardCandy from "../components/images/hard-candy"
import Firulete2 from "../components/images/firulete2"
import Uber from "../components/images/uber"
import Speedy from "../components/images/speedy"
import Chica from "../components/images/chica"
import Burger from "../components/images/burger"
import Cheetos from "../components/images/cheetos"
import CheetosVideo from "../components/images/cheetos-video"
import Firulete3 from "../components/images/firulete3"
import Firulete4 from "../components/images/firulete4"
import Adidas from "../components/images/adidas"
import Cata from "../components/images/cata"
import Firulete5 from "../components/images/firulete5"
import Supreme from "../components/images/supreme"
import Firulete6 from "../components/images/firulete6"
import Army from "../components/images/army"
import Firulete7 from "../components/images/firulete7"
import Firulete8 from "../components/images/firulete8"
import Wikichin from "../components/images/wikichin"
import InteractiveImage from "../components/interactiveImage/interactiveImage"

import styles from "./index.module.css"

const IndexPage = () => (
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
      <div className={styles.hardCandy}>
        <HardCandy />
      </div>
    </div>
    <div className={styles.firulete2}>
      <Firulete2 />
    </div>
    <div className={styles.uber}>
      <Uber />
    </div>
    <div className={styles.speedy}>
      <Speedy />
    </div>
    <div className={styles.chica}>
      <Chica />
    </div>
    <div className={styles.burger}>
      <Burger />
    </div>
    <div className={styles.cheetos}>
      <Cheetos />
    </div>
    <div className={styles.cheetosVideo}>
      <CheetosVideo />
    </div>
    <div className={styles.firulete3}>
      <Firulete3 />
    </div>
    <div className={styles.firulete4}>
      <Firulete4 />
    </div>
    <div className={styles.adidas}>
      <Adidas />
    </div>
    <div className={styles.cata}>
      <Cata />
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
    <div className={styles.wikichin}>
      <Wikichin />
    </div>
    <InteractiveImage>
      <Wikichin />
    </InteractiveImage>
  </Layout>
)

export default IndexPage
