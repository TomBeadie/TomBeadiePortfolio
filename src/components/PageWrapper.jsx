import MarqueeSlider from "./Marquee";
import Moon from "./SplineScene";

export const PageWrapper = () => {
  return (
    <>
      <div className="page-wrapper grain">
        <div className="main-wrapper">
          <div className="logo-container">TB</div>
          <MarqueeSlider />

          <div className="section-hero">
            <div className="coordinates-wrapper">
              <p>34.8526° N, 82.3940° W</p>
            </div>
            <div className="hero-middle">
              <div className="moon-wrapper"><Moon /></div>
             

              <div className="heading-wrapper">
                <div className="header">
                  <div className="h1">Tom beadie</div>
                </div>
              </div>

              <div className="contact-button-wrapper">
                <button className="link-button contact-btn">
                  <div className="mask"></div>
                  <p>Contact</p>
                </button>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="about-wrapper">
                <img
                  className="divider-bar"
                  src="src/assets/divider-bar.png"
                  alt="divider-bar"
                  width="200px"
                />

                <div className="body-text-regular">
                  <p className="body-text">
                    i’m a freelance web designer and frontend developer based in
                    the u.s.
                    <br></br>i enjoy helping small companies with their website
                    vision, and founded hoverstate design with my wife, a
                    professional graphic designer.
                  </p>
                </div>

                <div className="hoverstate-cta">
                  <img
                    src="src/assets/HoverstateDesignLogo.svg"
                    alt="Hoverstate Design Logo"
                  />
                  <p className="body-text">Visit hoverstate design</p>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="sm-link-wrapper">
              <button className="link-button sm-link-btn">
                <div className="mask"></div>
                <p>LinkedIn</p>
              </button>
              <button className="link-button sm-link-btn">
                <div className="mask"></div>
                <p>GitHub</p>
              </button>
            </div>
            <div className="skills-wrapper">
              <img
                className="skills-icon"
                src="src/assets/html-icon.svg"
                alt="HTML5 icon"
              />
              <img
                className="skills-icon"
                src="src/assets/css-icon.svg"
                alt="CSS icon"
              />
              <img
                className="skills-icon"
                src="src/assets/javascript-icon.svg"
                alt="JavaScript icon"
              />
              <img
                className="skills-icon"
                src=" src/assets/typescript-icon.svg"
                alt="TypeScript icon"
              />
              <img
                className="skills-icon"
                src="src/assets/react-icon.svg"
                alt="React icon"
              />
              <img
                className="skills-icon"
                src=" src/assets/webflow-icon.svg"
                alt="Webflow icon"
              />
              <img
                className="skills-icon"
                src="src/assets/figma-icon.svg"
                alt="Figma icon"
              />
              <img
                className="skills-icon"
                src="src/assets/sass-icon.svg"
                alt="SASS icon"
              />
              <img
                className="skills-icon"
                src="src/assets/photoshop-icon.svg"
                alt="Photoshop icon"
              />
              <img
                className="skills-icon"
                src="src/assets/lightroom-icon.svg"
                alt="Lightroom icon"
              />
              <img
                className="skills-icon"
                src="src/assets/illustrator-icon.svg"
                alt="Illustrator icon"
              />
              <img
                className="skills-icon"
                src="src/assets/git-icon.svg"
                alt="Git icon"
              />
              <img
                className="skills-icon"
                src="src/assets/markdown-icon.svg"
                alt="Markdown icon"
              />
            </div>

            <div className="copyright">
              <p>©2024</p>
            </div>
          </footer>
        </div>
        <div className="work-section">
          <div className="work-heading-container">
            <h2>Work</h2>
          </div>
          <div className="work-item-container"></div>
          <div className="work-item">
            <div className="number-box">
              <p>01</p>
            </div>
            Conspiracy Brewing Co.
          </div>
          <div className="work-item">
            <div className="number-box">
              <p>02</p>
            </div>
            ?
          </div>
          <div className="work-item">
            <div className="number-box">
              <p>03</p>
            </div>
            ?
          </div>
          <div className="work-item last-work-item">
            <div className="number-box">
              <p>04</p>
            </div>
            Modlite Systems
          </div>
        </div>
      </div>
    </>
  );
};
