import React from "react"
import { Link } from "gatsby"
import styles from "./navBar.module.css"

import home from "./images/navigation/Home.png"
import photo from "./images/navigation/Photo.png"
import video from "./images/navigation/Video.png"
import contact from "./images/navigation/Contact.png"
import animation from "./images/navigation/animation.png"
import about from "./images/navigation/About.png"

const routes = { photo, video, contact, animation, about }

const NavBar = () => {
  return (
    <div className={styles.navBar_container}>
      <div>
        <div className={styles.navBar_link}>
          <Link to={"/"}>
            <img src={home} />
          </Link>
        </div>
      </div>
      <div className={styles.navBar_links}>
        {routes &&
          Object.keys(routes).map(route => {
            return (
              <div className={styles.navBar_link}>
                <Link to={`/${route}`}>
                  <img src={routes[route]} />
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default NavBar
