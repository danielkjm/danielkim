import React from 'react';

const Modal = ({ project, handleClose, show, children }) => {
  const modal = show ? 'showModal' : 'noModal';
  const image = project.name === 'CourtDude' ? 'cdImage' : 'ggImage';

  return (
    <div onClick={handleClose} className={modal}>
      <div className="modalContent">
        <div id="close" onClick={handleClose}>
          X
        </div>
        <img className={image} src={project.img} alt="project" />
        <div>
          <h3 className="modalName">{project.name}</h3>
          <p className="modalDescription">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
