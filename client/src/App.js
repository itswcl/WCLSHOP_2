import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from './Components/Main'
import Detail from './Components/Detail'
import Sidebar from './Components/Sidebar';
import Reviews from './Components/Reviews';
import ReviewForm from './Components/ReviewForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/reviews/add">
          <ReviewForm />
        </Route>

        <Route path="/reviews">
          <Reviews />
        </Route>

        <Route path="/products/:id">
          <Detail />
        </Route>

        <Route path="/sneakers">
          <Main />
        </Route>
        <Route path="/">
          <Redirect to="sneakers"/>
        </Route>

      </Switch>
      <Sidebar />

    </div>
  );
}

export default App;
