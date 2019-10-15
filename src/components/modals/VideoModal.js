import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer } from 'components';

export const VideoModal = props => {
  return (
    <ModalContainer
      toggle={props.toggleVideo}
      isOpen={props.showVideo}
      modalClass="video-modal"
      size="lg"
    >
      <div className="video-modal-wrapper">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="video modal"
            className="embed-responsive-item"
            src={`${props.videoLink}?&autoplay=1`}
            allowFullScreen
          />
        </div>
      </div>
    </ModalContainer>
  );
};

VideoModal.propTypes = {
  showVideo: PropTypes.bool,
  toggleVideo: PropTypes.func,
  videoLink: PropTypes.string
};
