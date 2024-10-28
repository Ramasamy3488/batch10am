import React from 'react'
import { Main2 } from './Main'
import Footer from './Footer'

function Myheader() {
  return (
    <div>
        <h1>This is from Header</h1>
        <Main2 />
        <a href="#">HOME</a>
        <a href="#">CONTACT</a>
        <a href="#">ABOUT US</a>
        <a href="#">COURCE</a>
        <a href="#">PRODUCT</a>
        <a href="#">BRANCH</a>
        <Footer />
    </div>
  )
}

export default Myheader