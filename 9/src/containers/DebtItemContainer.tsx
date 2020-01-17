import { connect } from 'react-redux';
import DebtItem from 'components/DebtItem';

interface State {
  activatedDebt: number | null;
}

const mapStateToProps = (state: State): State => {
  return {
    activatedDebt: state.activatedDebt,
  };
};

export default connect(
  mapStateToProps,
  null,
)(DebtItem);
