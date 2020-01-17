import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import { Debt } from 'interfaces/interfaces';

export interface Props {
  setDebts: (
    debts: Debt[],
  ) => {
    type: string;
    payload: {
      debts: Debt[];
    };
  };
  activateDebt: (
    id?: null,
  ) => {
    type: string;
    payload: {
      debt: null;
    };
  };
}

const SearchBar: React.FC<Props> = props => {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { setDebts, activateDebt } = props;

  const searchFilteredDebts = async (): Promise<void> => {
    setDebts([]);
    try {
      const result = await axios.post(`${BASE_URL}/GetFilteredDebts`, { text });
      const { data } = await result;
      activateDebt(null);
      setError(null);
      if (data.length === 0) {
        return setError('Nie znaleziono dłużników podanej frazy');
      }
      setDebts(data);
    } catch {
      setError('Podana fraza musi być większa niż 3 znaki');
    }
  };

  return (
    <>
      <div className="search-bar-container">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          type="search"
          className="search-bar search-bar__input"
        />
        <button
          type="button"
          className="search-bar search-bar__button"
          onClick={() => searchFilteredDebts()}
        >
          szukaj
        </button>
      </div>
      {error !== null ? <div className="search-bar__error-text">{error}</div> : null}
    </>
  );
};

export default SearchBar;
