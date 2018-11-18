import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel ,FormControl ,Button } from 'react-bootstrap';
import { searchNearbyRestaurants } from './utils/axios';
import RestaurantPanel from './components/RestaurantPanel';
import './styles/index.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.searchRestaurants = this.searchRestaurants.bind(this);
        this.searchRandomRestaurant = this.searchRandomRestaurant.bind(this);
        this.showRestaurantDetails = this.showRestaurantDetails.bind(this);
        this.state = {
            searchTerm: '',
            restaurants: []
        };
    }

    handleInputChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    searchRandomRestaurant(){

    }

    showRestaurantDetails(restaurant){
        return (
            <RestaurantPanel key={restaurant.venue.id} restaurant={restaurant} />
        );
    }

    searchRestaurants(e){
        if(e){
            e.preventDefault();
        }

        searchNearbyRestaurants(this.state.searchTerm).then((response) => {
            console.log(response.data.response.groups[0].items)
            this.setState({restaurants: response.data.response.groups[0].items});
        }).catch(function (error) {
                // handle error
                // console.log(error);
            });
    }

    render() {
        return (
            <Grid fluid={true}>
              <Row className="show-grid restaurant-finder-div">
                <Col xs={12} md={8} mdOffset={2} lg={8} lgOffset={2}>
                  <form onSubmit={this.searchRestaurants} className="restaurant-finder-form">
                    <FormGroup>
                      <ControlLabel>Search Restaurants</ControlLabel>
                      <FormControl
                          value={this.state.searchTerm}
                          placeholder="Search Restaurants Using Keywords, Names, Etc"
                          onChange={this.handleInputChange}
                          type="text"
                      />
                    </FormGroup>
                    <Col xs={12} md={6} className="random-search">
                      <Button
                          block
                          onClick={this.searchRandomRestaurant}>Feeling lazy
                      </Button>
                    </Col>
                    <Col xs={12} md={6} className="main-search">
                      <Button
                          block
                          onClick={this.searchRestaurants}
                          bsStyle="primary">Search
                      </Button>
                    </Col>
                  </form>
                </Col>
              </Row>
              <Row className="show-grid restaurant-details">
                  {
                      this.state.restaurants.map(this.showRestaurantDetails)
                  }
              </Row>
            </Grid>
        );
    }
}

export default App;
