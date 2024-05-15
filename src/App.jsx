import './App.css'
import About from './components/About'
import Component from './components/Component.jsx'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <>
      <div style={{ backgroundImage: 'url("https://e1.pxfuel.com/desktop-wallpaper/307/901/desktop-wallpaper-backgrounds-black-background-design.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Header/>
        <Home/>
      <div className='p-3'  style={{backgroundColor:'pink', height:'70px'}}>  <marquee style={{color:'black', fontSize:'20px'}} >HTML - CSS - REACT - MONGODB - EXPRESS - ANGULAR - NODEJS - JAVASCRIPT - FIGMA - WEBSOCKET - </marquee></div>

      <About/>

     <div className='p-3'>
        <marquee >
          <img height={'70px'} style={{marginRight:'20px'}} src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" alt="" />
          <img height={'70px'} src="https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" alt="" />
          <img height={'70px'} src="https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA" alt="" />
          <img height={'70px'} style={{marginRight:'20px'}} src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" alt="" />
          <img height={'70px'} src="https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt="" />
          
        </marquee>
     </div>
     <Services/>
     <Skills/>
     <Component/>
        <Footer/>
      </div>
    </>
  )
}

export default App
