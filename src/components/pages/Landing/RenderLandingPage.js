import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MapContainer from '../Home/Map';
import { Layout, Menu, Avatar } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useDispatch, useSelector } from 'react-redux';
import { reverseGeocode } from '../../../state/actions/mapActions';

const mapboxgl = require('mapbox-gl');

const { Header } = Layout;

function RenderLandingPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const coords = useSelector(state => state.map.coords);
  const isMoving = useSelector(state => state.map.isMoving);
  const movementCoords = useSelector(state => state.map.movementCoords);

  useEffect(() => {
    if (!isMoving) {
      dispatch(reverseGeocode(movementCoords[movementCoords.length - 1]));
    }
  }, [isMoving]);

  const loginHandler = () => {
    history.push('/login');
  };

  const signOut = () => {
    window.localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <Layout>
      <div>
        <Header style={{ backgroundColor: '#491A55' }}>
          <Avatar style={{ float: 'left' }} src="./logo.png" />
          <Title style={{ color: 'white' }} level={3}>
            CitySpire
          </Title>
          <Menu
            mode="horizontal"
            style={{
              position: 'fixed',
              backgroundColor: '#491A55',
              top: '-1px',
              marginLeft: '80%',
              width: '20%',
              color: '#EBECF0',
            }}
          >
            <Menu.Item onClick={loginHandler}>Login</Menu.Item>
            <Menu.Item onClick={signOut}>Log Out</Menu.Item>
          </Menu>
        </Header>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '50%',
            left: '50%',
            marginLeft: '-25%',
            zIndex: 2,
            backgroundColor: 'rgba(255,255,255,.25)',
            textAlign: 'center',
            marginBottom: '10%',
          }}
        >
          <h1>CitySpire</h1>
          <div>
            {coords.city !== '' && (
              <div>
                <p>You are looking at:</p>
                <p>
                  {coords.city}, {coords.state} {coords.zipcode}
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          <MapContainer mapboxgl={mapboxgl} />
        </div>
      </div>
    </Layout>
  );
}
export default RenderLandingPage;
