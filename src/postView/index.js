import Row from 'react-bootstrap/Row';

import { useParams } from "react-router-dom";


function PostView({ posts }) {
  const { id } = useParams();

  var post = posts.find(postObj => postObj.id === parseInt(id));

  return (
    <>
      <Row>
        {post ?
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
          :
          <>
            <h1>{"POST NOT FOUND"}</h1>
          </>
        }
      </Row>
    </>

  );
}

export default PostView;