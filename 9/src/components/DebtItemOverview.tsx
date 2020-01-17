import React from 'react';
import { DebtOverview } from 'interfaces/interfaces';

interface Props extends DebtOverview {
  activateDebt: (
    id?: number | null,
  ) => {
    type: string;
    payload: {
      debt: number | null;
    };
  };
}

const DebtItemOverview: React.FC<Props> = props => {
  const { id, name, value, nip, activateDebt } = props;

  return (
    <tr className="text-left">
      <td>{name}</td>
      <td>{nip}</td>
      <td>{value}</td>
      <td>
        <button type="button" onClick={() => activateDebt(id)} className="c-debt-item__button">
          Więcej
        </button>
      </td>
    </tr>
  );
};

export default DebtItemOverview;
