import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Ride from '../Ride/Ride';

class Rides extends Component {

  render() {
    const { rides, selectedRide, handleRideClick} = this.props;
    return (
      <Grid>
        {/* TODO: check what this means{ this.props.render && this.props.render() } */}
        {rides.map(ride => (
          <Grid.Column
            onClick={handleRideClick(ride.id)}
            key={ride.id}
            mobile={8} tablet={4} computer={4}
          >
            <Ride {...ride}
              selected={selectedRide === ride.id} />
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

export default Rides;