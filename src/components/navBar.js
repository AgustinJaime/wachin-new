import React from "react"
import { Link } from "gatsby"
import styles from "./navBar.module.css"

import HomePng from "./images/navigation/Home.png"
import PhotoPng from "./images/navigation/Photo.png"
import VideoPng from "./images/navigation/Video.png"
import ContactPng from "./images/navigation/Contact.png"
import AnimationPng from "./images/navigation/animation.png"
import AboutPng from "./images/navigation/About.png"

const NavBar = () => {
  return (
    <div>
      <div className={styles.navBar_container}>
        <div>
          <Link activeClassName={styles.navBar_link_active} to="/">
            <span className={styles.navBar_link}>
              <img src={HomePng} />
            </span>
          </Link>
        </div>
        <div>
          <Link activeClassName={styles.navBar_link_active} to="/photo">
            <span className={styles.navBar_link}>
              <img src={PhotoPng} />
            </span>
          </Link>
          <Link activeClassName={styles.navBar_link_active} to="/video">
            <span className={styles.navBar_link}>
              <img src={VideoPng} />
            </span>
          </Link>
          <Link activeClassName={styles.navBar_link_active} to="/animation">
            <span className={styles.navBar_link}>
              <img src={AnimationPng} />
            </span>
          </Link>
          <Link activeClassName={styles.navBar_link_active} to="/contact">
            <span className={styles.navBar_link}>
              <img src={ContactPng} />
            </span>
          </Link>
          <Link activeClassName={styles.navBar_link_active} to="/about">
            <span className={styles.navBar_link}>
              <img src={AboutPng} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
