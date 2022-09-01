import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import AboutMe from './views/AboutMe/AboutMe';
import Blog from './views/Blog/Blog'
import ContactPage from './views/ContactPage/ContactPage'
import Galery from './views/Gallery/Galery'
import Skills from  './views/Skills/Skills'

function App() {

  const homePage = (
    <div>
      <AboutMe/>
      <Galery/>
      <Skills/>
    </div>
  )


  return (
    <div>
      <Header />

      <Routes>

        <Route path = '/' element = {homePage}/>
        <Route path = 'contact' element = {<ContactPage/>}/>
        <Route path = 'blog' element = {<Blog/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
