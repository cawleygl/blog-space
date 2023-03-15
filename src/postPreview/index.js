import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

function PostPreview({ posts }) {
  const cardLength = 200;

  return (
    <>
      <Container fluid>
        <Row>
          <h1>ALL POSTS</h1>


        </Row>
        {posts.map((post) =>
          <Row>
            <Col>
              <Card as="a" href={"post/" + post.id} style={{ width: 'auto', cursor: "pointer" }} className="mx-2 my-2" key={post.id}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    {post.body.substring(0, cardLength)}{post.body.length > cardLength ? "..." : null}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>

  );
}

export default PostPreview;