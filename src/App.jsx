import About from './Aboutme/About_me'
import Footer from './Aboutme/Footer/Footer'
import './App.css'
import Contact from './Contact/Contact'
import Development from './Development/Development'
import Header from './Header/Header'
import Works from './Works/Works'

function App() {
  
  return (
    <div>
      <Header/>
      <section id='development'><Development/></section>
      <section id='about'><About/></section>
      <section id='works'></section><Works/>
      <section id='contact'></section><Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
