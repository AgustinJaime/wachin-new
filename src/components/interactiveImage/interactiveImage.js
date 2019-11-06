import React, { useEffect } from "react"
import styles from "./interactiveImage.module.css"

export const InteractiveImage = props => {
  let target = null

  useEffect(() => {
    window.addEventListener(
      "dragstart",
      e => {
        e.preventDefault()
        console.log("dragging")
      },
      false
    )
  })

  function startResize(e) {
    target = e.target
    window.addEventListener("mousemove", startResizing, false)
    window.addEventListener("mouseup", finishResize, false)
  }

  function startDrag(e) {
    target = e.target
    window.addEventListener("mousemove", startDragging, false)
    window.addEventListener("mouseup", finishDragging, false)
  }

  function startResizing(e) {
    const parent = target.parentElement
    parent.style.width = `${e.clientX - parent.offsetLeft}px`
    parent.style.height = `${e.clientY - parent.offsetTop}px`
  }

  function startDragging(e) {
    const parent = target.parentElement
    parent.style.left = `${e.clientX}px`
    parent.style.top = `${e.clientY}px`
  }

  function finishResize(e) {
    window.removeEventListener("mousemove", startResizing, false)
  }

  function finishDragging(e) {
    window.removeEventListener("mousemove", startDragging, false)
  }

  return (
    <div className={styles.imageContainer}>
      <div onMouseDown={startDrag}>{props.children}</div>
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
