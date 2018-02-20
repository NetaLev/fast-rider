import React, { Component } from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import './ViewAccessCode.css';
import Ticket from '../Ticket/Ticket';
import Steps from '../Steps/Steps';

class ViewAccessCode extends Component {
    handleReloadClick = () => {
        window.location.reload();
    }

    render() {
        const { ticket } = this.props;
        const ticketIssued = (ticket.id); //INFO: ticket id exists ==> api successfully issued a ticket
        const steps = [];

        //TODO: refactor: wrap in a function
        if (ticketIssued) {
            steps.push(
                {
                    key: 'finalStep',
                    text:
                        `Thank you for using The Jungle
                   FastRider ticket system - your access 
                   code is now ready!`,
                    icon: 'vIcon'
                }
            );
        } else if (ticket.status) {
            steps.push(
                {
                    key: 'fatalErrorStep',
                    text:
                        `Error ${ticket.status}: 
                        ${ticket.error}`,
                    icon: 'errorIcon'
                }
            );
        } else if (ticket.code) {
            steps.push(
                {
                    key: 'apiErrorStep',
                    text:
                        `Error ${ticket.code}: 
                        ${ticket.message}`,
                    icon: 'errorIcon'
                }
            );
        }

        return (
            <Grid centered>
            {/* TODO: pass inline style to css class */}
            <Segment basic textAlign="center" style={{maxWidth: '450px'}}>
                    <Steps steps={steps} />

                    {ticketIssued &&
                        <Ticket ticket={ticket} />
                    }

                    {!ticketIssued &&
                        <Button
                            className='reload'
                            icon='refresh'
                            content='Try again'
                            onClick={this.handleReloadClick}
                        />
                    }
            </Segment>
            </Grid>
        );
    }

};

export default ViewAccessCode;


