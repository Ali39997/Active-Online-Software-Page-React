import React from 'react'

import PropTypes from 'prop-types'

import './testimonal.css'

const Testimonal = (props) => {
  return (
    <div className={`testimonal-testimonal testimonal ${props.rootClassName} `}>
      <span className="testimonal-text">{props.Quote}</span>
    </div>
  )
}

Testimonal.defaultProps = {
  From: 'Vista Social',
  Avatar_alt: 'image',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7fb172da-d555-4a0b-8f79-d80392f4e0b7/81550f0b-fe9c-46a9-953d-476e68e1cad0?org_if_sml=186296',
  Avatar_src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&ixlib=rb-1.2.1&w=200',
  heading1: 'Heading',
  heading: 'Heading',
  rootClassName: '',
  Name: 'Andy Smith',
  pastedImage_alt: 'pastedImage',
  Quote: 'hello',
}

Testimonal.propTypes = {
  From: PropTypes.string,
  Avatar_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  Avatar_src: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  Name: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  Quote: PropTypes.string,
}

export default Testimonal
