import Homepage from './pages/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router';
import HatsPage from './pages/shop/hats/hats.component.jsx';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>
      </Switch>
    </>
  );
}

export default App;
