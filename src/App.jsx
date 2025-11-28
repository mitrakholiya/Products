import { useState } from 'react'
import Home from './Section3'
import Section1 from './Section1'
import Header from './commonPage/Header'
import Section3 from './Section3'
import Section2 from './Section2'
import Section4 from './Section4'
import Footer from './commonPage/Footer'
import Section10 from './Section10'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section10/>
      <Footer/>
    </>
  )
}

export default App
