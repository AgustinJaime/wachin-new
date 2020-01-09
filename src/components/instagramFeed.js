import React, { useEffect, useState } from "react"
import { fetchInstagramPhotos } from "../helpers/instagramFeedHelpers"
import styles from "./instagramFeed.module.css"

export const InstagramFeed = ({ url }) => {
  const [photos, setPhotos] = useState([])
  const [profilePic, setProfilePic] = useState("")

  useEffect(() => {
    const getPhotos = async () => {
      const { photos, profilePic } = await fetchInstagramPhotos(url)
      setPhotos(photos)
      setProfilePic(profilePic)
    }
    getPhotos()
  }, [url])

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.profilePic}>
        <div>
          <img src={profilePic} alt="" />
        </div>
        <span>WACHIN.TV</span>
      </div>
      <div className={styles.container} href={url} target="_blank">
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
      </div>
    </a>
  )
}

export default InstagramFeed
