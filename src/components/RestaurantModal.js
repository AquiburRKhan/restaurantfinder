import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/index.scss';

class RestaurantModal extends Component {
    constructor(props) {
        super(props);

        this.handleOnHide = this.handleOnHide.bind(this);
    }

    handleOnHide(){
        this.props.handleModalClose();
    }

    render() {
        const { showModal,restaurant } = this.props;
        return (
            <Modal show={ showModal } onHide={this.handleOnHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{restaurant.venue.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleOnHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default RestaurantModal;
