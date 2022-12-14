import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Artigo } from "./pages/Artigo";
import { Home } from "./pages/Home";

export function Router(){
  return(
    <Routes>
     <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/artigo" element={<Artigo />}/>
     </Route>
    </Routes>
  )
}