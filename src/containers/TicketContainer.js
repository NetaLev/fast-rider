import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PINForm from '../components/PINForm/PINForm';

import { updatePIN, getTicket } from '../actions/actions';

const mapStateToProps = ({ updatedPin, selectedRide }, {showMobileSubmit}) => {
    return { updatedPin, selectedRide, showMobileSubmit };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updatePIN,
    getTicket
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(PINForm);