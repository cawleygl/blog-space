import './App.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// Sample Data
import data from './sampleData.json';

// Components
import PostPreview from './postPreview';
import Navbar from './Navbar';



function App() {
  const { posts } = data;

  return (
    <div className="App">
      <Navbar />
      <Container>
        <PostPreview posts={posts} />
        {/*<PostView> / */}

      </Container>
    </div>
  );
}

export default App;
