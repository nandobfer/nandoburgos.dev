import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Cheatsheet } from "./pages/Cheatsheet";
import { Home } from "./pages/Home";


const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/cheatsheet' element={<Cheatsheet />} />
            </Routes>
        </BrowserRouter>
    </div>
        

  );
}

export default App;
