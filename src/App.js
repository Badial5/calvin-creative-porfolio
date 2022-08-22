import React from 'react'
//Router 
import { Routes, Route } from "react-router-dom";


//Global Style
import GlobalStyle from './components/globalStyle/global-style.component'

//pages
import Nav from './Routes/Navigation/nav.component'
import AboutUs from './pages/about/about-us'

import ContactUs from './pages/contactUs/contact-us.component'
import OurWork from './pages/ourWork/our-work.component'

import MovieDetails from './pages/MovieDetails/MovieDetails';


const App = () => {
  return (
    <div>
      <GlobalStyle />
      
<Routes>

    <Route path='/' element={<Nav />}>

      <Route index  element={<AboutUs />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='work'  element={<OurWork />} />
      <Route path='/work/:id' element={<MovieDetails />} />

    </Route>

</Routes>

    </div>
  )
} 

export default App