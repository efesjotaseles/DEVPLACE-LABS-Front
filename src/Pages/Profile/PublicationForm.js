import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function PublicationForm() {

  return (
    <>
    <div className='container mt-3'>
      <Row>
        <Form.Label column="lg" lg={2}>
           Title
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder=" Title" />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column="lg" lg={2}>
          Content
        </Form.Label>
        <Col>
        <Form.Control
          as="textarea"
          placeholder="Write your thoughts here..."
          style={{ height: '100px' }}
        />
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </Col>
      </Row>
    </div>
    </>
  )
}


