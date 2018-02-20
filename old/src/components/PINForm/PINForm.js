import React, { Component } from 'react';
import { Form, Menu, Visibility } from 'semantic-ui-react';
import './PINForm.css';
//import SplitPane from '../SplitPane/SplitPane';

class PINForm extends Component {
    handleChange = (event) => {
        const value = event.target.value;
        this.props.updateRequest(value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { value } = this.props;
        this.props.addNewItem(value);
    }

    render() {
        const { showMobileSubmit, value } = this.props; /*INFO: value: input data*/
        /*TODO: check real world examples: where to hold consts outside of render (probably in constructor)*/
        const buttonClassNames = showMobileSubmit ? 'pinsubmit shown' : 'pinsubmit';

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input 
                    placeholder='#PIN' 
                    width={13}
                    value={value}
                    onChange={this.handleChange}
                     />
                    <Form.Button
                        className={buttonClassNames}
                        content='SUBMIT'
                        width={3}
                        fluid
                        type='submit'
                    />
                </Form.Group>
            </Form>
        );
    }
}

export default PINForm;