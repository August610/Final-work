import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCard = (props) => (
  <ContentLoader 
    speed={2}
    width={240}
    height={430}
    viewBox="0 0 240 430"
    backgroundColor="#b3b3b3"
    foregroundColor="#655d5d"
    {...props}
  >
    <circle cx="192" cy="409" r="12" /> 
    <rect x="5" y="304" rx="2" ry="2" width="140" height="20" /> 
    <rect x="4" y="64" rx="2" ry="2" width="130" height="14" /> 
    <rect x="5" y="91" rx="2" ry="2" width="200" height="200" /> 
    <rect x="5" y="338" rx="0" ry="0" width="151" height="11" /> 
    <rect x="5" y="356" rx="0" ry="0" width="168" height="13" /> 
    <rect x="5" y="380" rx="0" ry="0" width="183" height="13" />
  </ContentLoader>
)

export default SkeletonCard
