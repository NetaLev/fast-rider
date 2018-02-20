import React, { Component } from 'react';
import { Form, Menu, Visibility } from 'semantic-ui-react';
//import SplitPane from '../SplitPane/SplitPane';

class FormEnterPIN extends Component {

    // state = {
    //     menuFixed: false
    // }

    // stickTopMenu = () => this.setState({ menuFixed: true })

    // unStickTopMenu = () => this.setState({ menuFixed: false })

    render() {
        // const { id, zone, name, remaining_tickets, return_time, selected } = this.props;
        // const dynamicStyle = {
        //     borderTop: `${zone.color} 3px solid`,
        //     backgroundColor: selected ? zone.color : 'initial'
        // };
        return (
            <Form>
                <Form.Group>
                    {/* <Visibility  width={13}
                        onBottomPassed={this.stickTopMenu}
                        onBottomVisible={this.unStickTopMenu}
                        once={false}
                    > */}
                        <Form.Input placeholder='#PIN' width={13} />
                        <Form.Button content='SUBMIT' width={3} fluid />

                    {/* </Visibility> */}

                    {/* <Form.Button content='Submit' width={3} fluid /> */}

                    {/* <Menu.Item as={Form.Button} content='SUBMIT' width={3} fluid />
                    <Menu fixed='bottom' widths='1'>
                        <Menu.Item as={Form.Button} content='SUBMIT' fluid />
                    </Menu> */}
                </Form.Group>
            </Form>
        );
    }
}

export default FormEnterPIN;