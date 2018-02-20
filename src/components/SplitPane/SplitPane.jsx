import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import './SplitPane.css';

class SplitPane extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <Grid columns='equal' className='split-pane'>
        <Grid.Column>
          {left}
        </Grid.Column>
        <Grid.Column className='split-pane__right'>
          {right}
        </Grid.Column>
      </Grid>
    )
  }
}

export default SplitPane