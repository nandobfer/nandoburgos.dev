import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Cheatsheet } from "./pages/Cheatsheet";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";


const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/cheatsheet' element={<Cheatsheet />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    </div>
        

  );
}

export default App;
