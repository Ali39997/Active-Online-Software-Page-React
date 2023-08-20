import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card1.css'

const TestimonialCard1 = (props) => {
  return (
    <div
      className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
    >
      <div className="testimonial-card1-testimonial">
        <span className="testimonial-card1-text">{props.quote}</span>
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="testimonial-card1-image"
        />
        <span className="testimonial-card1-text1">{props.name}</span>
        <span className="testimonial-card1-text2">{props.role}</span>
      </div>
    </div>
  )
}

TestimonialCard1.defaultProps = {
  picture_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=300',
  role: 'SOFTWARE ENGINEER',
  picture_alt: 'profile',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  name: 'Jane Doe',
  rootClassName: '',
}

TestimonialCard1.propTypes = {
  picture_src: PropTypes.string,
  role: PropTypes.string,
  picture_alt: PropTypes.string,
  quote: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TestimonialCard1
