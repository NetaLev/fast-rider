import React, { Component } from 'react';
import ViewHome from './components/ViewHome/ViewHome';
import ViewAccessCode from './components/ViewAccessCode/ViewAccessCode';
import { Container, Header } from 'semantic-ui-react';

import './App.css';

class App extends Component {

  render() {
    const { ticket } = this.props;
    const receivedTicketResponse = ticket.id || ticket.code || ticket.error;

    return (
      <Container className='main-container'>
        <Header className='main-header primary-text' as='h1' textAlign='center'>
          The Jungle FastRider&trade; Service
        </Header>

        {!receivedTicketResponse && <ViewHome />}
        {receivedTicketResponse && <ViewAccessCode ticket={ticket}/>}

      </Container>
    );
  }
}

export default App;
