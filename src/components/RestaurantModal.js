import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
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
        const mapProps = {
            center: {
                lat: restaurant.venue.location.lat,
                lng: restaurant.venue.location.lng
            },
            zoom: 18
        };
        return (
            <Modal show={ showModal } onHide={this.handleOnHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{restaurant.venue.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="map">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyANykK8s9hAotra-WdhxeFqmPJAQT1Wzjc' }}
                            defaultCenter={mapProps.center}
                            defaultZoom={mapProps.zoom}>
                        </GoogleMapReact>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleOnHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default RestaurantModal;
