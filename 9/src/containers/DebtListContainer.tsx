import { connect } from 'react-redux';
import DebtList from 'components/DebtList';
import { setDebts } from 'duck/actions';

interface State {
  debts: [];
}

const mapStateToProps = (state: State): State => {
  return {
    debts: state.debts,
  };
};

const mapDispatchToProps = { setDebts };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DebtList);
