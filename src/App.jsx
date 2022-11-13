import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";


const App = () => {

  return (
    <div className="App">
        <Header />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/recuperar_senha/' element={<Home />} />
                </Routes>
            </BrowserRouter>
    </div>
        

  );
}

export default App;
