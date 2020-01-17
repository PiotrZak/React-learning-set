import React from 'react';
import { Debt } from 'interfaces/interfaces';

interface Props extends Debt {
  activateDebt: (
    id?: number | null,
  ) => {
    type: string;
    payload: {
      debt: number | null;
    };
  };
}

const DebtItemDetails: React.FC<Props> = props => {
  const { name, value, nip, address, documentType, price, number, activateDebt } = props;

  return (
    <tr className="c-debt-item-details text-left">
      <td>
        <p className="c-debt-item-text">Dłużnik</p>
        {name}
        <p className="c-debt-item-text c-debt-item-text--margin">Adres</p>
        {address}
        <p className="c-debt-item-text c-debt-item-text--margin">Number</p>
        {number}
      </td>
      <td>
        <p className="c-debt-item-text">NIP</p>
        {nip}
        <p className="c-debt-item-text c-debt-item-text--margin">
          Rodzaj/Typ dokumentu stanowiący podstawę dla wierzytelności
        </p>
        {documentType}
      </td>
      <td>
        <p className="c-debt-item-text">Kwota zadłużenia</p>
        {value}
        <p className="c-debt-item-text c-debt-item-text--margin">Cena zadłużenia</p>
        {price}
      </td>
      <td>
        <button type="button" onClick={() => activateDebt(null)} className="c-debt-item__button">
          Mniej
        </button>
      </td>
    </tr>
  );
};

export default DebtItemDetails;
