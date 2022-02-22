import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

import Home from './components/Routes/Home';
import Services from './components/Routes/Services';
import Products from './components/Routes/Products';
import Footer from './components/Routes/Footer';
function App() {
  return (
<>
<Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
        </Switch>
        <Footer />
      </Router>
</>
  );
}

export default App;
