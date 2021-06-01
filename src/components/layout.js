import React from "react"
import { Global, css } from "@emotion/core"
import LogoWachin from "./images/logo-wachin"
import CTA_Chino from "./images/CTA/chino"
import styles from "./index.module.css"
import NavBar from "./navBar"

const Layout = ({ noscroll, children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        html,
        body {
          margin: 0 auto;
          max-width: 90vw;
          width: 1400px;
          color: #555;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          font-size: 1.25vw !important; /* 18px */
          line-height: 1.4;
          background-color: #ea5f52;
          overflow: ${noscroll ? "hidden" : "initial"};
          /* Remove margin for main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }
        }
      `}
    />
    <main>
      <NavBar />
      <h1>
        {/* rename styles */}
        <div className={styles.logo}>
          <LogoWachin />
          <div className={`${styles.CTA_chino} ${styles.cta}`}>
            <CTA_Chino />
          </div>
        </div>
      </h1>
      {children}
    </main>
  </>
)

export default Layout
