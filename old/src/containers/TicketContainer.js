import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PINForm from '../components/PINForm/PINForm';

import { getTicket } from '../actions/actions';

const mapStateToProps = ( {rides} ) => {
  return { rides } 
};

const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(getRides());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rides);
