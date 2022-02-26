import React, { useEffect, useState } from 'react';
import i18n from '../i18n';

function LangSwitcher() {
    const [lang, setLang] = useState('')
    const options = i18n.languages
    const change = (e) => {
        setLang(e.target.value)
        console.log(e.target.value);
        

    }
    useEffect(() => {
        
        console.log(options);
        i18n.changeLanguage(lang)
    }, [lang])



 


return (
    
<div>
    <select value={lang} onChange={change} id="lang">
        {options.map((option)=> {
            return (<option key={option}>{option}</option>)
        } )}
    </select>
</div>
);
}

export default LangSwitcher;