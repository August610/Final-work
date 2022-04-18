import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCard = (props) => (<ContentLoader 
  speed={2}
  width={320}
  height={430}
  viewBox="0 0 320 430"
  backgroundColor="#d9d4d4"
  foregroundColor="#bdbcbc"
  {...props}
>
  <circle cx="305" cy="408" r="13" /> 
  <rect x="17" y="126" rx="2" ry="2" width="300" height="200" /> 
  <rect x="17" y="96" rx="0" ry="0" width="160" height="21" /> 
  <rect x="17" y="332" rx="0" ry="0" width="90" height="20" /> 
  <rect x="17" y="359" rx="0" ry="0" width="111" height="11" /> 
  <rect x="17" y="377" rx="0" ry="0" width="122" height="11" /> 
  <rect x="17" y="395" rx="0" ry="0" width="136" height="13" />
</ContentLoader>)

export default SkeletonCard
