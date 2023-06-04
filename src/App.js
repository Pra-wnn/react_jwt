




// export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import BalanceComponent from './components/BalanceComponents';
import { AuthProvider } from './context/AuthContext';
import PrivateRoutes from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>

        <Header />
        <Routes>
          {/* <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} exact />
          <Route path="/login" element={<PrivateRoute><LoginPage /></PrivateRoute>} /> */}
          <Route element={<PrivateRoutes />}>
            {/* private route we wanna protect */}
            <Route element={<HomePage/>} path='/' exact/>
            <Route element={<BalanceComponent/>} path='/' exact/>
          </Route>
          <Route element={<LoginPage/>}  path="/login" />
        </Routes>
          </AuthProvider>
      </Router>
    </div>
  );
}

export default App;


