import Home from './componenets/home';
import Header from './componenets/header';
import NewBlog from './componenets/NewBlog';
import BlogPage from './componenets/BlogPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header/>
      <switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/create">
          <NewBlog/>
        </Route>

        <Route path='/posts/:id'>
          <BlogPage/>
        </Route>
      </switch>
    </Router>
  );
}

export default App;
