import React from 'react';
import DebtItemOverviewContainer from 'containers/DebtItemOverviewContainer';
import DebtItemDetailsContainer from 'containers/DebtItemDetailsContainer';
import { Debt } from 'interfaces/interfaces';

interface Props extends Debt {
  activatedDebt?: number | null;
}

const DebtItem: React.FC<Props> = props => {
  const { id, name, nip, value, address, documentType, price, number, activatedDebt } = props;
  const isActivatedDebt = activatedDebt === id;

  return isActivatedDebt ? (
    <DebtItemDetailsContainer
      id={id}
      name={name}
      nip={nip}
      value={value}
      address={address}
      documentType={documentType}
      price={price}
      number={number}
    />
  ) : (
    <DebtItemOverviewContainer id={id} name={name} nip={nip} value={value} />
  );
};

export default DebtItem;
