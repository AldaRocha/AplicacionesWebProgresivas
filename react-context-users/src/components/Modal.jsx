import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalInfo = ({ show, handleClose, info }) => {
    return(
        <>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>
                        { info.titulo }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        info.eliminar == true && "Usuario Eliminado" 
                    }
                    {
                        info.eliminar == false && (
                            <>
                                <div className="text-center">
                                    <strong>Name:</strong>&nbsp;{ info.nombre }
                                    <br />
                                    <strong>Job:</strong>&nbsp;{ info.job }
                                    <br />
                                    <strong>Date:</strong>&nbsp;{ info.fecha }
                                </div>
                            </>
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalInfo;