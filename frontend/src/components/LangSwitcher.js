import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import i18n from '../i18n';

function LangSwitcher() {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState('')
    const options = i18n.languages
    const change = (e) => {
        setLang(e.target.value)
    }
    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

return (
    
<div>
    <select value={lang} onChange={change} id="lang">
        {options.map((option)=> {
            return (<option key={option} value={option}>{t(option)}</option>)
        } )}
    </select>
</div>
);
}

export default LangSwitcher;