import axios from "axios"

const instagramRegExp = new RegExp(
  /<script type="text\/javascript">window\._sharedData = (.*);<\/script>/
)

export const fetchInstagramPhotos = async accountUrl => {
  const response = await axios.get(accountUrl)
  const json = JSON.parse(response.data.match(instagramRegExp)[1])
  const profilePic = json.entry_data.ProfilePage[0].graphql.user.profile_pic_url
  const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
    0,
    8
  )
  const photos = edges.map(({ node }) => {
    console.log()
    return {
      url: `https://www.instagram.com/p/${node.shortcode}/`,
      thumbnailUrl: node.thumbnail_src,
      displayUrl: node.display_url,
      caption: node.edge_media_to_caption.edges.length
        ? node.edge_media_to_caption.edges[0].node.text
        : "",
    }
  })
  return { profilePic, photos }
}
