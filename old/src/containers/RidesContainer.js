import { connect } from 'react-redux';
import Rides from '../components/Rides/Rides';

import { getRides } from '../actions/actions';

const mapStateToProps = ( {rides} ) => {
  return { rides } 
};

const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(getRides());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rides);
