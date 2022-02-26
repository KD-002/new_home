import React from 'react';
import HostItem from "./HostItem";

function HostList({hosts}) {
    return (
        <div>
            {hosts.map(host => <HostItem key={host.id} host={host}/>)}
        </div>
    );
}

export default HostList;