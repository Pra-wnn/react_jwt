import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BalanceComponent = () => {
  const [balance, setBalance] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/balances/2/');
        setBalance(response.data.amount);
        setUser(response.data.user);

        console.log('--->',response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {balance ? (
        <div>
        <p>Balance: {user}</p>
        <p>Balance: {balance}</p>
           </div>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BalanceComponent;
