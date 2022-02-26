import './App.css';
import {useState} from "react";

function App() {
    const [hosts, setHosts] = useState();

    const handleHosts = () => {
        fetch('api/v1/hosts')
            .then(response => response.json())
            .then(data => setHosts(data))
            .catch(error => {
            })
    }

    return (
        <div className="App">
            <button onClick={handleHosts}>Get all Hosts</button>
            <pre>{JSON.stringify(hosts, null, 2)}</pre>
        </div>
    );
}

export default App;
