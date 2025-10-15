import Browse from "../components/browse/Browse"
import Carusel from "../components/carusel/carusel"
import Discover from "../components/discover/discover"
import Header from "../components/header/Header"
import Learn from "../components/learn/learn"

const Home = () => {
  return (
    <>
        <Header />
        <Discover />
        <Carusel />
        <Learn /> 
        <Browse /> 
    </>    
  )
}

export default Home