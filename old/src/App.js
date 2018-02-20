import React, { Component } from 'react';
import ViewHome from './components/ViewHome/ViewHome';
import { Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'; //todo (optional): split only to needed files

class App extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>
          The Jungle FastRider Service
        </Header>
        <ViewHome />
      </Container>
    );
  }
}

export default App;
