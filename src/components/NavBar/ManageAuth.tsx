import React from 'react';
import { Modal } from 'react-bootstrap';
import SignIn from './SignIn';
import Register from './Register';

const ManageAuth = ({
  show,
  isSignIn,
  onSignIn,
  onModalClose,
}: {
  show: boolean;
  isSignIn: boolean;
  onSignIn: () => void;
  onModalClose: () => void;
}) => {
  return (
    <Modal
      show={show}
      onHide={onModalClose}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      {isSignIn ? (
        <SignIn onClose={onModalClose} onSwitch={onSignIn} />
      ) : (
        <Register onClose={onModalClose} onSwitch={onSignIn} />
      )}
    </Modal>
  );
};

export default ManageAuth;
