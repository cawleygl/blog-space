import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';


import { useParams } from "react-router-dom";
import { useEffect } from 'react';


function PostView({ posts }) {
  const { id } = useParams();



  var post = posts.find(postObj => postObj.id === id);

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