import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'
import Ride from '../Ride/Ride';
import './Rides.css';

class Rides extends Component {

  handleClick = (selectedRide) => (e) => {
    this.props.selectRide(selectedRide);
  }

  render() {
    const { rides, selectedRide } = this.props;
    const noAvailableRides = (rides && rides.length === 0);
    return (
      <Grid className="rides-grid">
        {rides && rides.map(ride => (
          <Grid.Column className="ride-column"
            onClick={this.handleClick(ride.id)}
            key={ride.id}
            mobile={8} tablet={4} computer={4}
          >
            <Ride {...ride}
              selected={selectedRide === ride.id} />
          </Grid.Column>
        ))}
        {noAvailableRides &&
          <Grid.Column>
            <Header>Unfortunately, all rides are not available at the moment. Please come back later.</Header>
          </Grid.Column>
         }
      </Grid>
    );
  }
}

export default Rides;