import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card1-image"
      />
      <div className="blog-post-card1-container">
        <span className="blog-post-card1-text">{props.label}</span>
        <span className="blog-post-card1-text1">{props.title}</span>
        <span className="blog-post-card1-text2">{props.description}</span>
        <div className="blog-post-card1-container1">
          <div className="blog-post-card1-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card1-image1"
            />
            <span className="blog-post-card1-text3">{props.author}</span>
          </div>
          <span className="blog-post-card1-text4">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  profile_alt: 'profile',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  author: 'Jon Doe',
  time: '5 min read',
  label: 'ENTERPRISE',
  title: 'Lorem ipsum dolor sit amet',
}

BlogPostCard1.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  profile_src: PropTypes.string,
  profile_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
}

export default BlogPostCard1
