import { Card, Col, Container, Row } from "react-bootstrap";

export const Header = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title className="text-center m-0">
                                    <h1>
                                        Publicaci&oacute;nes
                                    </h1>
                                </Card.Title>
                            </Card.Header>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;
