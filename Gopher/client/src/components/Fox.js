
import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Fox({ fox }) {
    return (
        <Card className="m-4">
            <CardBody>
                <img src={fox.image} alt={fox.link} style={{ width: '250px' }}></img>

            </CardBody>
        </Card>
    );
}