import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] =  useState("black");


  return (
    <div className='home' style={{backgroundColor:color}}>
    <div className='container'>
       <button onClick={() => setColor("red")} style={{backgroundColor:"red"}}>Red</button>
       <button onClick={() => setColor("green")} style={{backgroundColor:"green"}}>Green</button>
       <button onClick={() => setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
       <button onClick={() => setColor("black")} style={{backgroundColor:"black"}}>Black</button>
       <button onClick={() => setColor("gray")} style={{backgroundColor:"gray"}}>Gray</button>
       <button onClick={() => setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
       <button onClick={() => setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
       <button onClick={() => setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
       <button onClick={() => setColor("violet")} style={{backgroundColor:"violet"}}>Violet</button>
       <button onClick={() => setColor("brown")} style={{backgroundColor:"brown"}}>Brown</button>
       <button onClick={() => setColor("white")} style={{backgroundColor:"white", color:"black"}}>White</button>
      
    </div>
    </div>
  )
}

export default App
