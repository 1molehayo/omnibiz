import React from 'react';
import { Modal } from 'reactstrap';
import PropTypes from 'prop-types';
import { ReactComponent as Close } from 'assets/img/svg/close.svg';

export const ModalContainer = props => (
  <Modal
    isOpen={props.isOpen}
    toggle={props.toggle}
    size={props.size}
    centered={true}
    className={props.modalClass}
    backdrop={true}
  >
    <div className="close-icon">
      <Close
        style={{ cursor: 'pointer' }}
        onClick={props.toggle}
        color="#fa4659"
        strokeWidth={1}
      />
    </div>

    {props.children}
  </Modal>
);

ModalContainer.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  modalClass: PropTypes.string,
  size: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  toggle: PropTypes.func
};

ModalContainer.defaultProps = {
  modalClass: '',
  size: 'md'
};
