import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImageComponent from './ImageCompo';

function Main() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
          <img  src='https://cdn.airfuture.com/img/air-sg/TK.svg' alt="s"style={{width:"100px"}}  />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

    <ImageComponent />
    </Row>
  );
}

export default Main;