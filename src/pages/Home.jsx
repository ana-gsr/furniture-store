import Browse from "../components/browse/browse"
import Carusel from "../components/carusel/carusel"
import Discover from "../components/discover/discover"
import Header from "../components/header/Header"
import Learn from "../components/learn/learn"
import Works from "../components/works/works"
import Suscribe from "../components/suscribe/suscribe"
import Footer from "../components/footer/footer"

const Home = () => {
  return (
    <>
        <Header />
        <Discover />
        <Carusel />
        <Learn /> 
        <Browse /> 
        <Works />
        <Suscribe />    
        <Footer />
    </>    
  )
}

export default Home