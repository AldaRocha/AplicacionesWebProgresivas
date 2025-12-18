import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
    return(
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title className="text-center m-0">
                                    <h3 className="m-0">
                                        Todos los derechos reservados
                                    </h3>
                                </Card.Title>
                            </Card.Header>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;
