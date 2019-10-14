import React from 'react';
import ReduxToastr from 'react-redux-toastr';

export default function Toastr() {
  return (
    <ReduxToastr
      progressBar
      position="bottom-right"
      transitionIn="bounceIn"
      transitionOut="bounceOutUp"
    />
  );
}
