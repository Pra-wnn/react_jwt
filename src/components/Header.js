import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Header = () => {
  const {user ,logoutUser} = useContext(AuthContext);

  // const decode = jwtDecode(user)
  
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      {user ? (
        <p onClick={logoutUser}>Logout</p>
      ): (
        <Link to='/login' >Login</Link>
      )}
      {user && <p>Hewo user: {user.username}</p>}
      {/* {console.log("user is",user.user_id)} */}
      
    </div>
  );
};

export default Header;
