import { useState } from 'react'
import './App.css'
import Herozinho from './componentes/pages/herozinho';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Herozinho class="bg-black"/>
    </>
  )
}

export default App
