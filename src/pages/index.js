import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Firulete1 from "../components/images/firulete1"
import LogoWachin from "../components/images/logo-wachin"
import Contact from "../components/images/contact"
import NYPD from "../components/images/nypd"
import HardCandy from "../components/images/hard-candy"
import Firulete2 from "../components/images/firulete2"

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
          src="https://open.spotify.com/embed/playlist/0Mv0b9aQLuyEUU5oSKzsrF"
          width="300"
          height="380"
          frameborder="0"
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
  </Layout>
)

export default IndexPage
