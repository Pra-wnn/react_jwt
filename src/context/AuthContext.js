import { createContext,useState, useEffect } from "react";



import { useNavigate } from 'react-router-dom'

import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";



const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

  // localStorage.getItem('authTokens')

    let [user, setUser] = useState(  localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null )
    let [authTokens,SetAuthTokens] = useState(  localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    

    let navigate = useNavigate()

    const loginUser =  async (e) => {
        e.preventDefault()
        //prevetsn refresh after form submission
        console.log('Form submubitted')
      let response = await fetch('http://127.0.0.1:8000/api/login/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'username': e.target.username.value,
    'password': e.target.password.value
  }),
});



let data = await response.json();
console.log('data', data);


if (response.status === 200) {
  SetAuthTokens(data);
  // console.log('jwt',jwtDecode(data.access))
  const decoded_data = jwt_decode(data.access)
  setUser(decoded_data)

  localStorage.setItem('authTokens', JSON.stringify(data))
  navigate('/')
} else {
  alert('Something went wrong!');
}
}

//logout 
let logoutUser = () => {

  SetAuthTokens(null);
  // console.log('jwt',jwtDecode(data.access))
  setUser(null)
  localStorage.removeItem('authTokens')
  navigate('/login')
}
  

    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
        
    }
    return(
<AuthContext.Provider value={contextData}>
    {children}
</AuthContext.Provider>
    )
}