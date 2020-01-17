import { connect } from 'react-redux';
import DebtItemOverview from 'components/DebtItemOverview';
import { activateDebt } from 'duck/actions';

const mapDispatchToProps = { activateDebt };

export default connect(
  null,
  mapDispatchToProps,
)(DebtItemOverview);
