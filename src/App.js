import CineMain from "./components/CineMain"
import GlobalStyle from "./GlobalStyle"
import Header from "./components/Header"
import Movie from "./components/Movie"
import Session from "./components/Session"
import Success from "./components/Success"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<CineMain />}/>
                <Route path="/filme" element={<Movie />}/>
                <Route path="/sessao" element={<Session />}/>
                <Route path="/sucesso" element={<Success />}/>
            </Routes>
        </BrowserRouter>
    )
}
