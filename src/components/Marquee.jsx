import Marquee from "react-fast-marquee";

const MarqueeSlider = () => (
  <>
    <div className="marquee">
      <Marquee speed={240}>
        <div className="marquee-inner-wrapper">
          <h2>designer <img src="src/assets/divider-bar.png" alt="" /> developer</h2>
        </div>
      </Marquee>
    </div>
  </>
);

export default MarqueeSlider;
