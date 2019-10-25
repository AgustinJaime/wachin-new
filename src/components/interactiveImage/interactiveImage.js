import React from "react"
import styles from "./interactiveImage.module.css"

export const InteractiveImage = props => {
  let target = null

  function startResize(e) {
    target = e.target
    window.addEventListener(
      "dragstart",
      e => {
        e.preventDefault()
        console.log("dragging")
      },
      false
    )
    window.addEventListener("mousemove", startResizing, false)
    window.addEventListener("mouseup", finishResize, false)
  }

  function startResizing(e) {
    const parent = target.parentElement
    parent.style.width = `${e.clientX - parent.offsetLeft}px`
    parent.style.height = `${e.clientY - parent.offsetTop}px`
  }

  function finishResize(e) {
    window.removeEventListener("mousemove", startResizing, false)
  }

  return (
    <div className={styles.imageContainer}>
      {props.children}
      <div
        className={`${styles.handle} ${styles.handleNW}`}
        onMouseDown={startResize}
      ></div>
      <div
        className={`${styles.handle} ${styles.handleSW}`}
        onMouseDown={startResize}
      ></div>
      <div
        className={`${styles.handle} ${styles.handleSE}`}
        onMouseDown={startResize}
      ></div>
    </div>
  )
}

export default InteractiveImage
