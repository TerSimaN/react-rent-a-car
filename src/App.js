import { Switch } from 'react-router';
import './App.css';
import { Login } from './components/auth/login/Login';
import { Register } from './components/auth/register/Register';
import Layout from './components/layout/Layout';
import { AuthenticatedRoute } from './core-utils/protection/AuthenticatedRoute';
import { NonAuthenticatedRoute } from './core-utils/protection/NonAuthenticatedRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <NonAuthenticatedRoute exact path="/login" component={Login} />
        <NonAuthenticatedRoute exact path="/register" component={Register} />
        <AuthenticatedRoute path="/" component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
