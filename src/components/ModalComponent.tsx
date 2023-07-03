import React from 'react';
import Image from 'next/image';

import { IMyVerticallyCenteredModalProps } from '@/interfaces/IMyVerticallyCenteredModalProps ';

import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TableEndpoints from './TableEndpoints';

const ModalComponent: React.FC<IMyVerticallyCenteredModalProps> = (props) => {
    console.log(props, 'props')
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='glassmorphism custom-modal'
        >
            <Row className='justify-content-center'>
                <Col className='d-flex align-items-center justify-content-center lg:mb-3 ' md="auto" lg={12}>
                    {props.mobUrl !== undefined ? (
                        <Image
                            src={props.mobUrl}
                            alt="Photo project in mobile"
                            width={200}
                            height={100}
                        />
                    ) : (
                        <TableEndpoints
                            endpoints={props.endpoints}
                        />
                    )}
                </Col>
                <Col className='d-flex align-items-center flex-column justify-content-center p-4' md="auto" lg={8}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                            {props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='p-3 m-1'>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Row className='justify-content-center gap-3 mb-2  '>
                        <Col><button className='btn'>Repositório</button></Col>
                        <Col><button className='btn'>Deploy</button></Col>
                    </Row>
                </Col>
            </Row>

            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;
