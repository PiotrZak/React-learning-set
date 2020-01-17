import React, { useEffect } from 'react';
import axios from 'axios';
import DebtItemContainer from 'containers/DebtItemContainer';
import { BASE_URL } from 'constants/constants';
import { DebtAPI } from 'interfaces/interfaces';
import Loader from './Loader';

interface Props {
  debts?: [];
  setDebts: (
    debts: DebtAPI[],
  ) => {
    type: string;
    payload: {
      debts: DebtAPI[];
    };
  };
  activatedDebt?: number | null;
}

const DebtList: React.FC<Props> = props => {
  const { debts, setDebts } = props;

  useEffect(() => {
    const getDebts = async (): Promise<void> => {
      const result = await axios.get(`${BASE_URL}/GetTopDebts`);
      const { data } = await result;
      setDebts(data);
    };

    getDebts();
  }, [setDebts]);

  return (
    <table className="table">
      <thead>
        <tr className="text-left">
          <th className="debt-list__text--header">dłużnik</th>
          <th className="debt-list__text--header">nip</th>
          <th className="debt-list__text--header">kwota zadłużenia</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {!debts || debts.length === 0 ? (
          <Loader />
        ) : (
          debts.map((debt: DebtAPI) => (
            <DebtItemContainer
              key={debt.Id}
              id={debt.Id}
              name={debt.Name}
              nip={debt.NIP}
              value={debt.Value}
              address={debt.Address}
              documentType={debt.DocumentType}
              price={debt.Price}
              number={debt.Number}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default DebtList;
