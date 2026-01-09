import Browse from "../components/browse/browse"
import Carusel from "../components/carusel/carusel"
import Discover from "../components/discover/discover"
import Header from "../components/header/Header"
import Learn from "../components/learn/learn"
import Works from "../components/works/works"

const Home = () => {
  return (
    <>
        <Header />
        <Discover />
        <Carusel />
        <Learn /> 
        <Browse /> 
        <Works />
    </>    
  )
}

export default Home