import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
// import HighestScores from "./pages/HighestScores.jsx";
import Play from "./pages/Play.jsx";
import Options from "./pages/Options.jsx";

import GlobalContextProvider from "./context/GlobalContext.jsx";

function App() {

  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          {/* <Route path="/highest-scores" element={<HighestScores/>}/>  */}
          <Route path="/play" element={<Play/>}/> 
          <Route path="/options" element={<Options/>}/>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
