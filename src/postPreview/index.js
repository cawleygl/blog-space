import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PostPreview({ posts }) {

  const postRender = posts.map((post) =>
    <Row key={post.id}>
      <Col lg={2}>
        <h1>{post.title}</h1>

      </Col>
      <Col>
        <p>{post.body}</p>

      </Col>
    </Row>
  );

  return (
    <>
      {postRender}
    </>

  );
}

export default PostPreview;