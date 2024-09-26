import Navbar from "./components/Navbar/Navbar"
import LocationFilter from "./components/LocationFilter/LocationFilter"
import Cards from "./components/Cards/Cards"
import './App.css'
import Footer from "./components/Footers/Footers"
import Cards2 from "./components/Cards2/Cards2"

function App() {
 
  
  return (
    <>
    <Navbar></Navbar>
    <LocationFilter></LocationFilter>
    <Cards/>
    <Cards2></Cards2>
    <Footer></Footer>
    </>
  )
}

export default App
