import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function Host() {
    const {id} = useParams();
    const {host, setHost} = useState({});

    useEffect(() => {
        fetch(`api/v1/hosts/${id}`)
            .then(response => response.json())
            .then(data => setHost(data))
    }, [])

    return (
        <div>
            Test
            {JSON.stringify(host, null, 2)}
        </div>
    );
}

export default Host;