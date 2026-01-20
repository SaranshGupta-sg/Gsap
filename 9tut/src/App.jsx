import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  const gsapRef = useRef(null)

  // useGSAP(()=>{
  //   gsap.to(gsapRef.current,{
  //     rotate:720,
  //     duration:2,
  //     delay:1,
  //   })
  // })

  useGSAP(()=>{
    gsap.to(".box",{
      rotate:720,
      duration:2,
      delay:1,
    })
  },{scope:".container"})
  return (
    <div>
      <main>
        <div className="container">
          <div className="circle"></div>
          <div ref={gsapRef} className="box"></div>
        </div>
        <div className="container2">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
      </main>
    </div>
  )
}

export default App
