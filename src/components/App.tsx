import { useState, useRef, useEffect } from 'react'
import { Home } from '@/components'
import { Container } from "@mui/material"
import { Canvas } from '@react-three/fiber'

export const App = () => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })
  console.log(window.innerHeight)
  return (
    <div style={{backgroundColor: "#242", width: "100%", height:"100%", display:"flex", justifyContent:"center"}}>
        <div style={{maxWidth: '1260px', backgroundColor: "#242424", width:"100%", height:"100vh"}}>
          <div ref={ref}>Navbar</div>
          <Home height={height}/>
        </div>
    </div>
  )
}