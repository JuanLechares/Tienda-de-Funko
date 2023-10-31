import "./App.css";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ListCollection from "../ListCollection/ListCollection";
import NewReleases from "../NewReleases/NewReleases";



const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <ListCollection />
      <NewReleases />
    </>
  )
}

export default App;