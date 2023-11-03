import "./Home.css";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ListCollection from "../ListCollection/ListCollection";
import NewReleases from "../NewReleases/NewReleases";
import Footer from "../Footer/Footer";
import Aside from "../Aside/Aside";



const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Aside />
      <ListCollection />
      <NewReleases />
      <Footer />
    </>
  )
}

export default Home;