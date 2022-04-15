import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPost = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={486}
    viewBox="0 0 500 486"
    backgroundColor="#b3b3b3"
    foregroundColor="#655d5d"
    {...props}
  >
    <circle cx="481" cy="471" r="13" /> 
    <rect x="17" y="126" rx="2" ry="2" width="400" height="200" /> 
    <rect x="21" y="28" rx="14" ry="14" width="50" height="25" /> 
    <rect x="17" y="66" rx="0" ry="0" width="300" height="21" /> 
    <rect x="17" y="96" rx="0" ry="0" width="380" height="21" /> 
    <rect x="17" y="334" rx="0" ry="0" width="163" height="20" /> 
    <rect x="17" y="361" rx="0" ry="0" width="111" height="16" /> 
    <rect x="17" y="384" rx="0" ry="0" width="122" height="18" /> 
    <rect x="17" y="418" rx="17" ry="17" width="149" height="27" />
  </ContentLoader>
)

export default SkeletonPost