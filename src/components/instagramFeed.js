import React, { useEffect, useState } from "react"
import { fetchInstagramPhotos } from "../helpers/instagramFeedHelpers"
import styles from "./instagramFeed.module.css"

export const InstagramFeed = ({ url }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await fetchInstagramPhotos(url)
      setPhotos(photos)
    }
    getPhotos()
  }, [])

  return (
    <a className={styles.container} href={url} target="_blank">
      <div className={styles.firstCol}>
        {photos.slice(1, 4).map(photo => (
          <picture key={photo.thumbnailUrl}>
            <img src={photo.thumbnailUrl} alt={photo.caption} />
          </picture>
        ))}
      </div>
      <div className={styles.secondCol}>
        <div className={styles.hero}>
          {photos.slice(0, 1).map(photo => (
            <picture key={photo.thumbnailUrl}>
              <img src={photo.thumbnailUrl} alt={photo.caption} />
            </picture>
          ))}
        </div>
        <div className={styles.belowHero}>
          {photos.slice(4, 6).map(photo => (
            <picture key={photo.thumbnailUrl}>
              <img src={photo.thumbnailUrl} alt={photo.caption} />
            </picture>
          ))}
        </div>
      </div>
    </a>
  )
}

export default InstagramFeed
