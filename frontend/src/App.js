import './App.css';
import {useState} from "react";
import { useTranslation } from 'react-i18next';
import LangSwitcher from './components/LangSwitcher';

function App() {
    const [hosts, setHosts] = useState();
    const { t, i18n } = useTranslation();

    const handleHosts = () => {
        fetch('api/v1/hosts')
            .then(response => response.json())
            .then(data => setHosts(data))
            .catch(error => {
            })
    }

    return (
        
            <div className="App">
            <button onClick={handleHosts}>{t('Get all Hosts')}</button>
            <LangSwitcher/>
            <pre>{JSON.stringify(hosts, null, 2)}</pre>
        </div>

        
        
    );
}

export default App;
