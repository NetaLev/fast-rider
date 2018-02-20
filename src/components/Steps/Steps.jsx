import React, { Component } from 'react'
import { Grid, Image, Header } from 'semantic-ui-react';
import './Steps.css';
import ticketIcon from '../../assets/ico-01.svg';
import arrowIcon from '../../assets/ico-02.svg';
import clockIcon from '../../assets/ico-03.svg';
import vIcon from '../../assets/ico-04.svg';
import errorIcon from '../../assets/ico-05.svg';
//import './Steps.css';

class Steps extends Component {

  mapIconAsset = (string) => {
    if (string === 'ticketIcon') {
      return ticketIcon;
    } else if (string === 'arrowIcon') {
      return arrowIcon;
    } else if (string === 'clockIcon') {
      return clockIcon;
    } else if (string === 'vIcon') {
      return vIcon;
    } else if (string === 'errorIcon') {
      return errorIcon;
    }
  }

  render() {
    const { steps } = this.props;
    return (
      <Grid stackable columns={steps.length}>
        {steps.map(step => (
          <Grid.Column key={step.key}>
            <Header as='h4' icon textAlign='center'>
              <Image circular src={this.mapIconAsset(step.icon)} />
              <Header.Content>
                {step.text}
              </Header.Content>
            </Header>
          </Grid.Column>
        ))}
      </Grid>
    )
  }
}

export default Steps