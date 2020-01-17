import { connect } from 'react-redux';
import DebtItemDetails from 'components/DebtItemDetails';
import { activateDebt } from 'duck/actions';

const mapDispatchToProps = { activateDebt };

export default connect(
  null,
  mapDispatchToProps,
)(DebtItemDetails);
