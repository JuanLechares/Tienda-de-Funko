import "./Aside.css";
import logo1 from "../../assets/branding/funko_shopall.jpg"
import logo2 from "../../assets/branding/funko_pocket_pop.jpg"

const Aside = () => {
  return(
    <aside>
      <div>
        <article className="option-aside">
          <img className="option-img" src={logo1}></img>
        </article>
        <h3 className="option-title">todos los productos</h3>
      </div>
      <div>
        <article className="option-aside">
          <img className="option-img" src={logo2}></img>
        </article>
        <h3 className="option-title">llaveros</h3>
      </div>
    </aside>
  );
};

export default Aside;
