import React from 'react';
import SearchBarContainer from 'containers/SearchBarContainer';
import NumberCases from 'components/NumberCases';

const AppHeader: React.FC = () => {
  return (
    <header className="l-header-container row">
      <div className="l-header-container-box l-header-container-box--left col-12 col-md-6">
        <p className="l-header-text">podaj numer sprawy, nazwę lub nip dłużnika</p>
        <SearchBarContainer />
      </div>
      <div className="l-header-container-box l-header-container-box--right col-12 col-md-6">
        <p className="l-header-text l-header-text--red">całkowita liczba spraw</p>
        <p className="l-header-text l-header-text--large">
          <NumberCases />
        </p>
      </div>
    </header>
  );
};

export default AppHeader;
