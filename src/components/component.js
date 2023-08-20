import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image"
      />
      <h1 className="component-text">{props.heading}</h1>
      <div className="component-container1">
        <span className="component-text1">{props.text}</span>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1584940120743-8981ca35b012?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHJpY2glMjBndXl8ZW58MHx8fHwxNjkyMjIxMTYwfDA&ixlib=rb-4.0.3&h=1500',
  rootClassName: '',
  text: 'Founder blah blah blah blah blah blah blah blah',
  heading: 'Muhammad Ali',
  image_alt: 'image',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
