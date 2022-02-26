import './App.scss';

import {
    BrowserRouter, Routes, Route,
} from "react-router-dom";


import Header from "./components/header/Header";
import {Container} from "react-bootstrap";

import Home from "./components/home/Home";
import Host from "./components/hosts/Host";

function App() {


    return (<>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hosts/:id" element={<Host/>}/>
                <Route path="/helps" element={<Container>
                    <h1>Helps</h1></Container>}/>
                <Route path="/transports" element={<Container>
                    <h1>Transports</h1></Container>}/>
                <Route path="*" element={<Container>
                    <h1>404</h1></Container>}/>
            </Routes>
        </BrowserRouter>

    </>);
}

export default App;
