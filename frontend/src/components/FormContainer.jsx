import { Container, Row, Col } from 'react-bootstrap';
//  you can wrap whatever you want in this form container - those are all children
const FormContainer = ({ children }) => {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default FormContainer;
