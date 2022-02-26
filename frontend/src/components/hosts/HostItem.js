import React from 'react';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import {LinkContainer} from 'react-router-bootstrap'
import moment from "moment/moment";

function HostItem({host: {title, id, created, start_date, end_date, description, location}}) {
    return (
        <>
            <Card className='mt-1'>
                <Card.Header>{moment(created, "YYYYMMDD").fromNow()}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <LinkContainer to={`/hosts/${id}`}>
                        <Button variant="primary">Check details</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </>
    );
}

export default HostItem;