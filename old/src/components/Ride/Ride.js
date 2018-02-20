import React, { Component } from 'react';
import { Segment, Card, Icon } from 'semantic-ui-react';
import SplitPane from '../SplitPane/SplitPane';

class Ride extends Component {
  // TODO: FIX UGLYNESS
  render() {
    const { id, zone, name, remaining_tickets, return_time, selected } = this.props;
    //TODO: wrap style in css class and use className => example at PINForm
    const dynamicStyle = {
      borderTop: `${zone.color} 3px solid`,
      backgroundColor: selected ? zone.color : 'initial'
    };
    return (
      <Card style={dynamicStyle}>
        {/*  as={Segment} basic */}
        <Card.Content>
          <Card.Meta textAlign='right' >{zone.name}</Card.Meta>
          <Card.Header as='h1' textAlign='center'>{name}</Card.Header>
          <Card.Meta>
            {/*.substr(11, 5)*/}
            <SplitPane
              left={<span><Icon name='user' />{return_time /*TODO*/}</span>}
              right={<span><Icon name='user' />{remaining_tickets}</span>}
            />
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default Ride;

