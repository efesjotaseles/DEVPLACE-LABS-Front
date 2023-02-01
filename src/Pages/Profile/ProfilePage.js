import { PublicationForm } from "./PublicationForm"
import { PostList } from "../../Components/PostList"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import PublicationCard from "../Components/PublicationCard";

export function ProfilePage() {
    return (
        <>
            <div className="container mt-4">
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Nickname:
                    </Form.Label>
                    <Col sm="4">
                    <Form.Control plaintext readOnly defaultValue="@example" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    New Nickname:
                    </Form.Label>
                    <Col sm="4">
                    <Form.Control type="NewNickname" placeholder="Nickname" />
                    </Col>
                </Form.Group>
            </Form>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <h2 style={{textAlign:'center'}}>Your posts</h2>
                        <PostList/>
                    </div>
                    <div className="col-6">
                        <h2 style={{textAlign:'center'}}>New post</h2>
                        <PublicationForm/>
                    </div>
                </div>
            </div>
            <PublicationCard />
        </>
    )
}