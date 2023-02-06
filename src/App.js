import './App.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// Sample Data
import data from './sampleData.json';

// Components
import Navbar from './Navbar';
import PostPreview from './postPreview';
import LandingPage from './landingPage';


// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const { posts } = data;

  return (
    <div className="App">
      <Navbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route export path="/posts" element={<PostPreview posts={posts}/>} />
            {/* <Route export path="/posts" component={PostView}/> */}
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
