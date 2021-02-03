import React from 'react';
import RenderMenu from './RenderMenu';

function MenuContainer({ authService, LoadingComponent }) {
  return (
    <>
      <RenderMenu
        authService={authService}
        LoadingComponent={LoadingComponent}
      />
    </>
  );
}

export default MenuContainer;
