import { Row, Col } from 'react-bootstrap';
import { products } from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
    return (
        <>
            <h1>Books</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} xl={4}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;