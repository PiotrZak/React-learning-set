import { INITIAL_STATE } from 'constants/constants';
import types from './types.tsx';

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_DEBTS:
      return {
        ...state,
        debts: action.payload.debts,
      };
    case types.ACTIVATE_DEBT:
      return {
        ...state,
        activatedDebt: action.payload.debt,
      };
    default:
      return state;
  }
};

export default rootReducer;
