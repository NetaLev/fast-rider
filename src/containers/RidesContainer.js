import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Rides from '../components/Rides/Rides';

import { getRides } from '../actions/actions';
import { selectRide } from '../actions/actions';

const mapStateToProps = ( {rides, selectedRide} ) => {
  return { rides, selectedRide } 
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectRide,
    getRides
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Rides);
