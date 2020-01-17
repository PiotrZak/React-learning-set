import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';

const NumberCases: React.FC = () => {
  const [number, setNumber] = useState<number>(0);

  const getNumberCases = async (): Promise<void> => {
    const result = await axios.get(`${BASE_URL}/GetDebtsCount`);
    const { data } = await result;
    setNumber(data);
  };

  useEffect(() => {
    getNumberCases();
  }, []);

  return <>{number}</>;
};

export default NumberCases;
