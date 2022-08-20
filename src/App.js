import React from 'react'
//Global Style
import GlobalStyle from './components/globalStyle/global-style.component'

//pages
//aboutUs
import AboutUs from './pages/about/about-us'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <AboutUs />
    </div>
  )
}

export default App