import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import ListCollection from "../../components/ListCollection/ListCollection";
import NewReleases from "../../components/NewReleases/NewReleases";
import Footer from "../../components/Footer/Footer";
import Aside from "../../components/Aside/Aside";



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