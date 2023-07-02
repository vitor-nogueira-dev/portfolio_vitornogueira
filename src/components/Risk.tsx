import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RiskDiv: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col md={6} className="mx-auto">
                    <div className="mb-2 h-[0.5px] bg-white opacity-10" />
                </Col>
            </Row>
        </Container>
    )
}

export default RiskDiv;
