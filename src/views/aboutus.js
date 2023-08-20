import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import BlogPostCard21 from '../components/blog-post-card21'
import './aboutus.css'

const Aboutus = (props) => {
  return (
    <div className="aboutus-container">
      <Helmet>
        <title>Aboutus - Active Online Software Page</title>
        <meta
          property="og:title"
          content="Aboutus - Active Online Software Page"
        />
      </Helmet>
      <section className="aboutus-hero">
        <div className="aboutus-menu">
          <div id="mobile-menu" className="aboutus-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="aboutus-logo"
            />
            <div className="aboutus-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="aboutus-close-mobile-menu">
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="aboutus-icon"
              >
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="aboutus-desktop-navigation">
            <nav className="aboutus-centered">
              <div className="aboutus-left">
                <Link to="/" className="aboutus-navlink">
                  <img
                    alt="pastedImage"
                    src="/logo3-200h.png"
                    className="aboutus-logo1"
                  />
                </Link>
                <div className="aboutus-links1">
                  <div className="aboutus-container1">
                    <span className="aboutus-text03 Link">
                      Online Simulator
                    </span>
                  </div>
                  <a href="#workPage" className="aboutus-link Link">
                    How it works
                  </a>
                  <Link to="/aboutus" className="aboutus-navlink1 Link">
                    About us
                  </Link>
                </div>
              </div>
              <div className="aboutus-right">
                <span className="aboutus-sign-in Link">Sign in</span>
                <div className="aboutus-get-started">
                  <span className="aboutus-text04">Get started</span>
                </div>
                <div id="open-mobile-menu" className="aboutus-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="aboutus-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <Script
              html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
            ></Script>
          </div>
        </div>
        <h1 className="aboutus-heading">
          <span className="aboutus-text05">About The Founders</span>
          <br></br>
        </h1>
        <div className="aboutus-container2"></div>
        <div className="aboutus-blog">
          <div className="aboutus-container3">
            <BlogPostCard21
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName3"
            ></BlogPostCard21>
          </div>
          <div className="aboutus-container4">
            <BlogPostCard21
              image_src="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></BlogPostCard21>
          </div>
          <BlogPostCard21
            image_src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
            profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName2"
          ></BlogPostCard21>
        </div>
        <header className="aboutus-header"></header>
      </section>
      <footer className="aboutus-footer">
        <div className="aboutus-top">
          <div className="aboutus-left1">
            <span className="aboutus-text07">Subscribe to our newsletter</span>
            <div className="aboutus-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="aboutus-textinput input"
              />
              <div className="aboutus-subscribe">
                <span className="aboutus-text08">Subscribe</span>
              </div>
            </div>
            <span className="aboutus-text09">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className="aboutus-contact">
              <span className="aboutus-text10">Contact</span>
              <a
                href="mailto:use@active-app.com?subject=Support"
                className="aboutus-link1"
              >
                info@forxsim.com
              </a>
            </div>
          </div>
          <div className="aboutus-right1">
            <div className="aboutus-category">
              <span className="aboutus-text11">Policies</span>
              <div className="aboutus-links2">
                <span className="aboutus-text12">Terms and Condition</span>
                <span className="aboutus-text13">Disclaimer</span>
                <span className="aboutus-text14">User Responsibility </span>
                <span className="aboutus-text15">Use of content</span>
              </div>
            </div>
            <div className="aboutus-category1">
              <span className="aboutus-text16">Company</span>
              <div className="aboutus-links3">
                <span className="aboutus-text17">About</span>
                <span className="aboutus-text18">Team</span>
                <span className="aboutus-text19">News</span>
                <span className="aboutus-text20">Partners</span>
                <span className="aboutus-text21">Careers</span>
                <span className="aboutus-text22">Press &amp; Media</span>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus-bottom">
          <img
            alt="pastedImage"
            src="/logo3-200h.png"
            className="aboutus-branding"
          />
          <span className="aboutus-text23">Copyright © ForXsim- 2023</span>
        </div>
      </footer>
    </div>
  )
}

export default Aboutus
