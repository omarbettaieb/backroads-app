import React from 'react'

const Title = ({title,subTtitle}) => {
  return (
    <div className="section-title">
        <h2>{title} <span>{subTtitle}</span></h2>
      </div>
  )
}

export default Title