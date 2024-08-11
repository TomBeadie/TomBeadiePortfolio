import Marquee from "react-fast-marquee";

const MarqueeSlider = () => (
  <>
    <div className="marquee">
      <Marquee speed={240}>
        <div className="marquee-inner-wrapper">
          <h2>creative developer</h2>
        </div>
      </Marquee>
    </div>
  </>
);

export default MarqueeSlider;
