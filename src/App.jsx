import "./App.css"
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App

/*
notas

Router-Dom serve pra gerenciar multiplas paginas no site

Tudo tem de estar dentro de <Router> para dizer ao Router-Dom que sao paginas

<Routes> possibilita ao React mudar de pagina. Fora do <Routes> vao componentes globais (aparecem em todas as pag), dentro do <Routes> vao as paginas

Route sao as rotas das pag, que recebe a prop path que eh o endereco url
*/
