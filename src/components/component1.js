import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component1-image"
      />
    </div>
  )
}

Component1.defaultProps = {
  image_alt1: 'image',
  image_src1:
    'https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJldmlld3N8ZW58MHx8fHwxNjkyMjIzNzY1fDA&ixlib=rb-4.0.3&h=400',
  image_src:
    'https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJldmlld3N8ZW58MHx8fHwxNjkyMjIzNzY1fDA&ixlib=rb-4.0.3&w=700',
  image_alt: 'image',
  image_src3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt2: 'image',
  image_alt3: 'image',
  image_src2:
    'https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJldmlld3N8ZW58MHx8fHwxNjkyMjIzNzY1fDA&ixlib=rb-4.0.3&h=400',
}

Component1.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src2: PropTypes.string,
}

export default Component1
