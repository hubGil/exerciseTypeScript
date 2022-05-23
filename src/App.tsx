import { Routes, Route } from "react-router-dom";

import {
  Home,
  Exercicio1,
  Exercicio2,
  Exercicio3,
  Exercicio4,
  Exercicio5,
  Exercicio6,
  Exercicio7,
  Exercicio8,
  Exercicio9,
} from "@/components/pages";

import { Nav } from "@/components/molecules";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercicio1' element={<Exercicio1 />}></Route>
        <Route path='/exercicio2' element={<Exercicio2 />}></Route>
        <Route path='/exercicio3' element={<Exercicio3 />}></Route>
        <Route path='/exercicio4' element={<Exercicio4 />}></Route>
        <Route path='/exercicio5' element={<Exercicio5 />}></Route>
        <Route path='/exercicio6' element={<Exercicio6 />}></Route>
        <Route path='/exercicio7' element={<Exercicio7 />}></Route>
        <Route path='/exercicio8' element={<Exercicio8 />}></Route>
        <Route path='/exercicio9' element={<Exercicio9 />}></Route>
      </Routes>
    </>
  );
}

export default App;
