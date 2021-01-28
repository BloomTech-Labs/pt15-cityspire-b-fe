import React from 'react';
import { Link, useHistory } from 'react-router-dom';



function RenderLandingPage(props) {

  const history = useHistory();

  const loginHandler = () =>{
    history.push('/login');
  };


  return (
    <div>
      <h1>Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of how we'd like for you to approach page/routable
          components.
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
      </div>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}
export default RenderLandingPage;
