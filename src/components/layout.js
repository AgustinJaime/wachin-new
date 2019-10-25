import React from "react"
import { Global, css } from "@emotion/core"

const Layout = ({ children }) => (
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
          /* Remove margin for main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }
        }
      `}
    />
    <main>{children}</main>
  </>
)

export default Layout
