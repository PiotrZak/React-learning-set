import { connect } from 'react-redux';
import SearchBar from 'components/SearchBar';
import { setDebts, activateDebt } from 'duck/actions';

const mapDispatchToProps = { setDebts, activateDebt };

export default connect(
  null,
  mapDispatchToProps,
)(SearchBar);
