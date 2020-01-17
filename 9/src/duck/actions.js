import types from './types.tsx';

export const setDebts = debts => ({
  type: types.SET_DEBTS,
  payload: { debts },
});

export const activateDebt = debt => ({
  type: types.ACTIVATE_DEBT,
  payload: { debt },
});
