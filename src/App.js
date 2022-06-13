import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Component/Registration/registration';
import Dashboard from './Component/Admin/Dashboard';
import PageNotFound from './Component/PageNotFound/pageNotFound';
import CreatePost from './Component/Admin/createPost';
import ShowPost from './Component/Admin/showPost';
function App() {
  let token = localStorage.getItem('token')
  return (
    <div className="App">

        <Router>
          {
            token ?

              <Routes>
                <Route path="/dashboard" exact={true} element={<Dashboard />}>
                  <Route path='create-post' element={<CreatePost/>} />
                  <Route path='create-post/:id' element={<CreatePost/>} />
                  <Route path='show-post' element={<ShowPost/>} />
                </Route>
              </Routes>

              :
              <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/registration" exact={true} element={<Registration />} />
                <Route path="*" exact={true} element={<PageNotFound/>}></Route>
              </Routes>
          }

        </Router>

    </div>
  );
}

export default App;
