import React, { Component } from 'react';
import { Divider, Grid, Header, Icon, Visibility } from 'semantic-ui-react';
import RidesContainer from '../../containers/RidesContainer';
import PINForm from '../PINForm/PINForm';

class ViewHome extends Component {
  state = {
    showMobileSubmit: false,
    selectedRide: ''
  }

  handleRideClick = (rideId) => (e) => {
    //TODO: check if preventdefault is needed
    //console.log(`This led  ${rideId}!`);
    this.setState({ selectedRide: rideId });
  }

  stickSubmitButton = () => this.setState({ showMobileSubmit: true })

  unStickSubmitButton = () => this.setState({ showMobileSubmit: false })

  render() {
    const handleRideClick = this.handleRideClick;
    const { showMobileSubmit, selectedRide } = this.state

    const steps = [
      {
        key: 'step1',
        text:
          `Enter your park ticket
        #PIN number, then
        select the desired ride
        while noting the stated
        return time`,
        icon: 'user'
      },
      {
        key: 'step2',
        text:
          `Press 'submit' to
        confirm and retreive
        your access code`,
        icon: 'settings'
      },
      {
        key: 'step3',
        text:
          `When the time comes,
        use the special FastRider
        line to cut out a
        considerable wait time`,
        icon: 'sign out'
      },
    ]
    return (
      <React.Fragment>
        <Visibility
          onBottomPassed={this.stickSubmitButton}
          onBottomVisible={this.unStickSubmitButton}
          once={false}
        >
          <Divider />
        </Visibility>
        <Grid stackable columns={steps.length}>
          {steps.map(step => (
            <Grid.Column key={step.key}>
              <Header as='h3' icon textAlign='center'>
                <Icon name='users' circular />
                <Header.Content>
                  {step.text}
                </Header.Content>
              </Header>
            </Grid.Column>
          ))}
        </Grid>
        <PINForm showMobileSubmit={showMobileSubmit} />
        <RidesContainer
          selectedRide={selectedRide}
          handleRideClick={handleRideClick}
        />
      </React.Fragment>
    );
  }


};

export default ViewHome;


