import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HostList from "../hosts/HostList";

function Home() {
    const [hosts, setHosts] = useState([]);

    useEffect(() => {
        fetch('api/v1/hosts')
            .then(response => response.json())
            .then(data => setHosts(data));
    }, []);

    return (
        <Container className='mt-3'>
            <Row>
                <Col xs={12} sm={6}>
                    <HostList hosts={hosts}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;