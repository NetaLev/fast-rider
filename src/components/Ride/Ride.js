import React, { Component } from 'react';
import { Image, Segment, Card } from 'semantic-ui-react';
import SplitPane from '../SplitPane/SplitPane';
import { formatTime } from '../../helpers';
import ticketIcon from '../../assets/ico-g-01.svg';
import clockIcon from '../../assets/ico-g-03.svg';
import './Ride.css';

class Ride extends Component {
  render() {
    const { zone, name, remaining_tickets, return_time, selected } = this.props;
    const formattedReturnTime = formatTime(return_time);
    //TODO: wrap style in css class and use className => example at PINForm
    const dynamicStyle = {
      borderTop: `${zone.color} 4px solid`,
      backgroundColor: selected ? zone.color : '#373737'
    };
    return (
      <Card style={dynamicStyle} as={Segment} basic className='ride-card'>
        <Card.Content>
          <Card.Meta textAlign='right' >{zone.name}</Card.Meta>
          <Card.Header as='h1' textAlign='center'>{name}</Card.Header>
          <Card.Meta>
            <SplitPane
              left={<span><Image src={clockIcon} size='mini' className='ride-card__icon' />{formattedReturnTime}</span>}
              right={<span><Image src={ticketIcon} size='mini' className='ride-card__icon' />{remaining_tickets}</span>}
            />
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default Ride;

