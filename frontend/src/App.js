import './App.css';
import Button from 'react-bootstrap/Button';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import {useState} from "react";
import Header from "./components/header/Header";
import {Container} from "react-bootstrap";

function App() {
    const [hosts, setHosts] = useState([]);

    const handleHosts = () => {
        fetch('api/v1/hosts')
            .then(response => response.json())
            .then(data => setHosts(data))
            .catch(error => {
            })
    }

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Container>
                        <Button variant="primary" onClick={handleHosts}>
                            Get Hosts
                        </Button>
                        <ul>
                            {hosts.map(host => <li key={host.id}>
                                <pre>{JSON.stringify(host, null, 2)}</pre>
                            </li>)}
                        </ul>
                    </Container>}/>
                    <Route path="/hosts" element={<Container>
                        <h1>Hosts</h1></Container>}/>
                    <Route path="/helps" element={<Container>
                        <h1>Helps</h1></Container>}/>
                    <Route path="/transports" element={<Container>
                        <h1>Transports</h1></Container>}/>
                    <Route path="*" element={<Container>
                        <h1>404</h1></Container>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
