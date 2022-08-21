import React from 'react'
//Global Style
import GlobalStyle from './components/globalStyle/global-style.component'

//pages
import Nav from './Routes/Navigation/nav.component'
import AboutUs from './pages/about/about-us'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  )
}

export default App