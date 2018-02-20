import React, { Component } from 'react';
import { Visibility, Grid } from 'semantic-ui-react';
import RidesContainer from '../../containers/RidesContainer';
import TicketContainer from '../../containers/TicketContainer';
import Steps from '../Steps/Steps';

class ViewHome extends Component {
  state = {
    showMobileSubmit: false
  }

  stickSubmitButton = () => this.setState({ showMobileSubmit: true })

  unStickSubmitButton = () => this.setState({ showMobileSubmit: false })

  render() {
    const { showMobileSubmit } = this.state;

    /*TODO: refactor: does nor need to be rerendered all the time. check where I can put it (react conventions)*/
    const steps = [
      {
        key: 'step1',
        text:
          `Enter your park ticket
        #PIN number, then
        select the desired ride
        while noting the stated
        return time`,
        icon: 'ticketIcon'
      },
      {
        key: 'step2',
        text:
          `Press 'submit' to
        confirm and retreive
        your access code`,
        icon: 'arrowIcon'
      },
      {
        key: 'step3',
        text:
          `When the time comes,
        use the special FastRider
        line to cut out a
        considerable wait time`,
        icon: 'clockIcon'
      },
    ];
    return (
      <React.Fragment>
        <Visibility
          onBottomPassed={this.stickSubmitButton}
          onBottomVisible={this.unStickSubmitButton}
          once={false}
        >
        </Visibility>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Steps steps={steps} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {/* TODO: refactor: bad name, think of a better one and change (for container and component) */}
            <Grid.Column>
              <TicketContainer showMobileSubmit={showMobileSubmit} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <RidesContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }

};

export default ViewHome;


