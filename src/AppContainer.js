import { connect } from 'react-redux';
import App from './App';

//import { updatePIN, getTicket } from '../actions/actions';

const mapStateToProps = ({ ticket }) => {
    return { ticket };
};

export default connect(mapStateToProps)(App);