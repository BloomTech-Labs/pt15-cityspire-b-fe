import RenderLandingPage from '../components/pages/Landing/RenderLandingPage';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<RenderLandingPage /> test suite', () => {
  test('it handles a loading state', () => {
    const authService = {
      logout: jest.fn(),
    };
    const { getByText } = render(
      <Router>
        <RenderLandingPage
          userInfo={{ name: 'Sara' }}
          authService={authService}
        />
      </Router>
    );
    const button = getByText(/logout/i);
    userEvent.click(button);
    expect(authService.logout).toHaveBeenCalledTimes(1);
    expect(getByText(/hi sara welcome to labs basic spa/i).innerHTML).toBe(
      'Hi Sara Welcome to Labs Basic SPA'
    );
  });
});