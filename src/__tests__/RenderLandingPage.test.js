import RenderLandingPage from '../components/pages/Landing/RenderLandingPage';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mapboxgl from 'mapbox-gl';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../state/reducers';

const store = createStore(reducer, applyMiddleware(thunk));
const path = require('path');

describe('<RenderLandingPage /> test suite', () => {
  test('it handles a loading state', () => {
    const authService = {
      logout: jest.fn(),
    };
    const { getAllByText } = render(
      <Provider store={store}>
        <Router>
          <RenderLandingPage
            userInfo={{ name: 'Sara' }}
            authService={authService}
          />
        </Router>
      </Provider>
    );
    const buttons = getAllByText(/login/i);
    userEvent.click(buttons[0]);
  });
});
