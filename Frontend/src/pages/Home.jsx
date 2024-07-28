import ContactUs from "../components/ContactUs"
import Featured from "../components/Featured"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NavBar from "../components/NavBar"
import{Element} from "react-scroll"




function Home() {
  return (
    <div>
      <NavBar/>
      <Element name="hero">
          <Hero/>
      </Element>
     <Element name="featured">
       <Featured/>
     </Element>
     <Element name="contactez-nous">
        <ContactUs/>  
     </Element>
     
      
      <Footer/>
    
    

    </div>
  )
}

export default Home