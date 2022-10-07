import CineMain from "./components/CineMain"
import GlobalStyle from "./GlobalStyle"
import Header from "./components/Header"
import Movie from "./components/Movie"
import Session from "./components/Session"
import Success from "./components/Success"

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <CineMain />
            <Movie />
            <Session />
            <Success />
        </>
    )
}
