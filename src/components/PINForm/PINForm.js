import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import './PINForm.css';
//import SplitPane from '../SplitPane/SplitPane';

class PINForm extends Component {

    state = {
        showWarning: false
    }

    handleChange = (event) => {
        const pin = event.target.value;
        this.props.updatePIN(pin);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { selectedRide, updatedPin } = this.props;

        if (this.rideHasBeenSelected(selectedRide)) {
            this.props.getTicket(selectedRide, updatedPin);
        }
        else {
            this.setState({ showWarning: true })
        }
        
    }

    rideHasBeenSelected = (selectedRide) => {
        return (selectedRide && selectedRide > 0);
    }

    render() {
        const { showMobileSubmit, updatedPin } = this.props;
        const { showWarning } = this.state
        /*TODO: check real world examples: where to hold consts outside of render (probably in constructor)*/
        const buttonClassNames = showMobileSubmit ? 'pinsubmit shown' : 'pinsubmit';

        return (
            <Form onSubmit={this.handleSubmit} warning={showWarning}>
                <Form.Group>
                    <Form.Input
                        value={updatedPin}
                        onChange={this.handleChange}
                        placeholder='#PIN'
                        width={13}
                    />
                    <Form.Button size='large'
                        className={buttonClassNames}
                        content='SUBMIT'
                        type="submit"
                        width={3}
                        fluid
                    />
                    
                </Form.Group>
                <Message
                        warning
                        header='Please select the desired ride.'
                        width={16}
                    />
            </Form>
        );
    }
}

export default PINForm;