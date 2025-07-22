import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Herozinho from './componentes/pages/herozinho';
import Mpage from './componentes/pages/mpage';
import Home from "./componentes/pages/mainpage/Home";
import FluxoCaixa from "./componentes/pages/mainpage/FluxoCaixa";
import Projecoes from "./componentes/pages/mainpage/Projecoes";
import NovaTransacao from "./componentes/pages/mainpage/NovaTransacao";
import Bancos from "./componentes/pages/mainpage/Bancos";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Herozinho class="bg-black"/>}/>

    <Route path="/app" element={<Mpage class="w-screen h-screen" />}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="fluxo-caixa" element={<FluxoCaixa/>}/>
      <Route path="projecoes" element={<Projecoes/>}/>
      <Route path="nova-transacao" element={<NovaTransacao/>}/>
      <Route path="bancos" element={<Bancos/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
