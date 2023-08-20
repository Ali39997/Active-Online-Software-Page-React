import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Testimonal from '../components/testimonal'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Active Online Software Page</title>
        <meta property="og:title" content="Active Online Software Page" />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <Link to="/" className="home-navlink">
                  <img
                    alt="pastedImage"
                    src="/logo3-200h.png"
                    className="home-logo1"
                  />
                </Link>
                <div className="home-links1">
                  <div className="home-container1">
                    <span className="home-text03 Link">Online Simulator</span>
                  </div>
                  <a href="#workPage" className="home-link Link">
                    How it works
                  </a>
                  <Link to="/aboutus" className="home-navlink1 Link">
                    About us
                  </Link>
                  <a href="#FAQ" className="home-link1 Link">
                    <span>FAQ</span>
                    <br></br>
                  </a>
                </div>
              </div>
              <div className="home-right">
                <span className="home-sign-in Link">Sign in</span>
                <div className="home-get-started">
                  <span className="home-text06">Get started</span>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
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
        <header className="home-header">
          <h1 className="home-heading">Free Forex Trading Simulator</h1>
          <p className="home-text07">
            Welcome to our Free Online Forex Trading Simulator! Whether
            you&apos;re a beginner or an experienced trader, our simulator
            offers you a risk-free environment to practice and enhance your
            forex trading skills. Explore real-time market scenarios, experiment
            with different strategies, and gain confidence in your trading
            decisions without risking your capital. Our user-friendly interface
            and dynamic simulations ensure an engaging learning experience.
            Start trading today and take your forex expertise to the next level
          </p>
        </header>
      </section>
      <section className="home-statistics">
        <div className="home-container2"></div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container3">
            <div className="home-left1">
              <span className="home-text08 title">
                Manage all your trades in just one place.
              </span>
              <div className="home-get-started1 template-button">
                <span className="home-text09">Get started</span>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFuYWx5dGljcyUyMGN1cnJuZWN5fGVufDB8fHx8MTY5MjIxNTUxOXww&amp;ixlib=rb-4.0.3&amp;w=1200"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFuYWx5dGljc3xlbnwwfHx8fDE2OTIyMTUyOTh8MA&amp;ixlib=rb-4.0.3&amp;w=1200"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right1">
              <h2 className="home-text10 title">
                Advanced analytics, easy to understand.
              </h2>
              <div className="home-category">
                <span className="home-text11">Power reports</span>
                <span className="home-text12">
                  Explore our Power Reports feature, delivering in-depth
                  analyses of your trading performance. Gain actionable insights
                  into your strategies, identify strengths, and refine your
                  approach. Empower your trading decisions with data-driven
                  precision.
                </span>
              </div>
              <div className="home-category1">
                <span className="home-text13">Analytics</span>
                <span className="home-text14">
                  Our cutting-edge platform offers advanced analytics in a
                  format that&apos;s easy to understand. Elevate your trading
                  skills with our intuitive interface and comprehensive
                  insights.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-integrations">
        <div className="home-centered-container1">
          <div className="home-heading1">
            <span id="workPage" className="home-text15 title">
              How It Works
            </span>
            <span className="home-text16">
              At ForXsim, our cutting-edge simulator redefines the trading
              experience. Our platform utilizes real-time and historical API
              data, providing an unparalleled level of accuracy and
              authenticity. Immerse yourself in the markets with our
              meticulously detailed code, offering an impressive depth of
              realism. Experience the thrill of trading as if you were in the
              heart of the financial world, honing your skills and making
              informed decisions. The future of trading simulation is here.
            </span>
          </div>
          <div className="home-pills-container"></div>
        </div>
      </section>
      <section className="home-testimonals">
        <div className="home-left2">
          <span className="home-text17 title">
            What people say about ForXsim
          </span>
        </div>
        <div className="home-right2">
          <div className="home-column">
            <Testimonal
              Quote='"Kudos to the creators of this simulator! It&apos;s an exceptional tool for both beginners and experts. The wealth of resources, charts, and indicators make it feel like trading in the real forex market."'
              Avatar_src="/image552912-e3yq-200h.png"
              rootClassName="testimonal-root-class-name"
            ></Testimonal>
            <div className="home-testimonal testimonal">
              <span className="home-text18">
                &quot;I&apos;ve tried several simulators, but this one truly
                stands out. It&apos;s intuitive, engaging, and packed with
                features. My trading skills have soared, and I&apos;m now making
                more informed choices in the real market.&quot;
              </span>
            </div>
            <Testimonal
              From="Social Club"
              Name="Jessica Smith"
              Quote='"This simulator exceeded my expectations. The diversity of trading scenarios and market data is astonishing. It&apos;s not only an educational platform but also an empowering tool for making informed trading decisions."'
              Avatar_src="/image312912-mvsg-200h.png"
            ></Testimonal>
            <Testimonal
              From="BeMe"
              Name="Logan Boy"
              Quote="&quot;The forex trading simulator is a masterpiece! It's like having a virtual trading floor at my fingertips. The ability to test different strategies in a safe environment is a game-changer. I've become a more confident trader thanks to this platform.&quot;"
              Avatar_src="/image502912-6wy-200h.png"
            ></Testimonal>
            <Testimonal
              From="Hello W."
              Name="Laraine Summers"
              Quote="&quot;I've fallen in love with this simulator. It's like a playground for traders, where you can learn, experiment, and grow. The tutorials are clear, the interface is smooth, and the realistic market fluctuations are a thrill to work with.&quot;"
              Avatar_src="/image202912-zekh-200h.png"
            ></Testimonal>
          </div>
          <div className="home-column1">
            <Testimonal
              From="Handsly"
              Name="William McPau"
              Quote="&quot;I'm thoroughly impressed with this simulator. It's a comprehensive package that simulates the forex market seamlessly. Practicing with demo accounts has made me a more skilled trader. Highly recommended!&quot;"
              Avatar_src="/image572912-0d3-200h.png"
            ></Testimonal>
            <Testimonal
              From="Share"
              Name="Mariah Mae"
              Quote="&quot;A big thumbs up for this simulator! It's an excellent tool for traders of all levels. The risk-free environment to practice and experiment is priceless. It's like having a personal forex mentor by your side.&quot;"
              Avatar_src="/image632913-swij-200h.png"
            ></Testimonal>
            <Testimonal
              From="Gather"
              Name="John Finati"
              Quote="&quot;I've been trading for years, and this simulator still impresses me. It's the closest thing to real trading I've experienced. The attention to detail and user-friendly design make it stand out from the rest.&quot;"
              Avatar_src="/image102913-x4z8-200h.png"
            ></Testimonal>
            <Testimonal
              From="Zigo"
              Name="Mary Pau"
              Quote="&quot;I can't thank the creators of this simulator enough. It's not just a simulator; it's a treasure trove of trading wisdom. The interactive charts and real-time market data have given me insights I wouldn't have gained elsewhere.&quot;"
              Avatar_src="/image562913-ycff-200h.png"
            ></Testimonal>
          </div>
        </div>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading2">
            <span className="home-text19 title">
              <span>
                Start Trading
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>with ForXsim</span>
            </span>
            <span className="home-text23">
              Enhance your trading experience while learning along the way
            </span>
            <div className="home-get-started2 template-button">
              <span className="home-text24">Get Started</span>
            </div>
          </div>
          <div className="home-images">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGJpdGNvaW58ZW58MHx8fHwxNjkyMjE1NTYwfDA&amp;ixlib=rb-4.0.3&amp;w=1200"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-heading3">
          <span id="FAQ" className="home-text25 title">
            Frequently asked questions
          </span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header1">
              <span className="home-text26">
                — What is a Forex Trading Simulator?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text27">
                A Forex Trading Simulator is a virtual platform that allows you
                to practice trading in the foreign exchange market using real
                market data but without risking real money. It helps you learn
                and improve your trading skills in a risk-free environment.
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header2">
              <span className="home-text28">
                — How does the Forex Trading Simulator work?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text29">
                The simulator uses historical market data to create a realistic
                trading environment. Users can place virtual trades, set
                stop-loss and take-profit levels, and track their performance
                over time. It simulates real market conditions without the
                financial risk.
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header3">
              <span className="home-text30">
                <span className="home-text31">
                  — Is the simulator suitable for beginners?
                </span>
                <br className="home-text32"></br>
                <br></br>
                <span className="home-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text35">
                Absolutely! Our simulator is designed for traders of all levels,
                including beginners. It provides a safe space to learn the
                basics of forex trading, understand market dynamics, and
                practice different strategies before trading with real money.
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header4">
              <span className="home-text36">
                — Is the simulator a guarantee of success in real trading?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text37">
                No, while the simulator is an excellent learning tool, success
                in real trading depends on a variety of factors including market
                knowledge, discipline, risk management, and adapting to changing
                market conditions.
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header5">
              <span className="home-text38">
                — Is customer support available for simulator users?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text39">
                Yes, we offer customer support to assist you with any issues or
                questions you might have while using the simulator. Feel free to
                reach out to our support team for help.
              </span>
            </div>
          </div>
        </div>
        <div>
          <Script
            html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-left3">
            <span className="home-text40">Subscribe to our newsletter</span>
            <div className="home-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-subscribe">
                <span className="home-text41">Subscribe</span>
              </div>
            </div>
            <span className="home-text42">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className="home-contact">
              <span className="home-text43">Contact</span>
              <a
                href="mailto:use@active-app.com?subject=Support"
                className="home-link2"
              >
                info@forxsim.com
              </a>
            </div>
          </div>
          <div className="home-right3">
            <div className="home-category2">
              <span className="home-text44">Policies</span>
              <div className="home-links2">
                <span className="home-text45">Terms and Condition</span>
                <span className="home-text46">Disclaimer</span>
                <span className="home-text47">User Responsibility </span>
                <span className="home-text48">Use of content</span>
              </div>
            </div>
            <div className="home-category3">
              <span className="home-text49">Company</span>
              <div className="home-links3">
                <span className="home-text50">About</span>
                <span className="home-text51">Team</span>
                <span className="home-text52">News</span>
                <span className="home-text53">Partners</span>
                <span className="home-text54">Careers</span>
                <span className="home-text55">Press &amp; Media</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <img
            alt="pastedImage"
            src="/logo3-200h.png"
            className="home-branding"
          />
          <span className="home-text56">Copyright © ForXsim- 2023</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
