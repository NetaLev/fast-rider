import React, { Component } from 'react';
import { Segment, Card } from 'semantic-ui-react';
import SplitPane from '../SplitPane/SplitPane';
import { formatTime } from '../../helpers';
import './Ticket.css';

class Ticket extends Component {
  /* TODO: refactor DRY: this and Ride are very similar. use a parent component to include all Ticket and Ride similarities at the same place */
  render() {
    const { ticket } = this.props;
    const { return_time, access_code } = ticket;
    const formattedReturnTime = formatTime(return_time);
    const { zone, name } = ticket.ride;

    const dynamicStyle = {
      borderTop: `${zone.color} 4px solid`, 
    };
    return (
      <Card as={Segment} basic style={dynamicStyle} centered className='ticket-card'>
        <Card.Content>
          <Card.Meta>
            {/* TODO: refactor: instead of giving a specific class, create general subheader card class with white color */}
            <SplitPane
              left={<span className='ticketCard__ride-name'>{name}</span>}
              right={<span>{zone.name}</span>}
            />
          </Card.Meta>

          {/* TODO: refactor DRY: wrap meta+header in component */}
          <Card.Meta textAlign='center' >Return At</Card.Meta>
          <Card.Header as='h1' textAlign='center'>{formattedReturnTime}</Card.Header>

          <Card.Meta textAlign='center' >Use Access Code</Card.Meta>
          <Card.Header as='h1' textAlign='center'>{access_code}</Card.Header>

        </Card.Content>
      </Card>
    );
  }
}

export default Ticket;

