import "./Banner.css";
import banner from "../../assets/branding/funko_top_banner.jpg";

const Banner = () => {
  return (
    <section className="banner-background">
      <img className="banner-img" src={banner}></img>
    </section>
  );
};

export default Banner;
