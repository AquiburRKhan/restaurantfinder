import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import RestaurantModal from './RestaurantModal';
import '../styles/index.scss';

class RestaurantPanel extends Component {
    constructor(props) {
        super(props);

        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);

        this.state = {
            showModal: false
        };
    }

    handleModalShow() {
        this.setState({showModal: true});
    }

    handleModalClose() {
        this.setState({showModal: false});
    }

    render() {
        const {restaurant} = this.props;
        const iconUrl = restaurant.venue.categories[0].icon.prefix + '88' + restaurant.venue.categories[0].icon.suffix;
        const address = restaurant.venue.location.address || 'Dhaka, Bangladesh';
        return (
            <Col xs={12} sm={12} md={6} lg={6}>
                <Panel onClick={this.handleModalShow}>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{restaurant.venue.name}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <img src={iconUrl} alt="icon" height='100px' width="100px"/>
                        <div className="restaurant-info">
                            <p>{restaurant.venue.categories[0].name}</p>
                            <p>{address}</p>
                        </div>
                    </Panel.Body>
                </Panel>
                <RestaurantModal showModal={this.state.showModal}
                                 restaurant={ restaurant }
                                 handleModalClose={this.handleModalClose}/>
            </Col>
        );
    }
}

export default RestaurantPanel;
