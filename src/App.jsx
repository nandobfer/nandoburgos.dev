import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { LoginProvider } from "./contexts/LoginContext";
import { About } from "./pages/About";
import { Cheatsheet } from "./pages/Cheatsheet";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";


const App = () => {
    const [login, setLogin] = useState(false)

  return (
    <div className="App">
        <LoginProvider >
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
        </LoginProvider>
    </div>
        

  );
}

export default App;
