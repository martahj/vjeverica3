// @flow
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

type LoginModalProps = {
  open: boolean,
};

const LoginModal = ({
  open,
}: LoginModalProps) => (
  <Dialog
    open={open}
    title="Log In"
    actions={[
      <FlatButton
        label
      />,
    ]}
  />
);

export default LoginModal;
