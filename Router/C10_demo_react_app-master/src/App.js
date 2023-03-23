import './App.css';
import Layout from "./Components/Layout/Layout";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import OrderList from "./Components/Order/OrderList";
import SignIn from "./Pages/Login/Login";
import CustomerList from "./Components/Customers/CustomerList";
import React, {useEffect, useState} from "react";

function App() {
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        let idUser = localStorage.getItem('idUser');
        if (idUser) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }, []);

  return (
    <>
      <Routes>
          <Route path="/login" element={<SignIn/>}/>
              <Route path="/admin"  element={ isLogin ? <Layout/> : <Navigate to="/login" />}>
                  <Route path="" element={<Navigate to="/admin/dashboard" />}/>
                  <Route path="dashboard" element={<Dashboard/>}/>
                  <Route path="orders" element={<OrderList/>}/>
                  <Route path="customers" element={<CustomerList/>}/>
              </Route>
      </Routes>
    </>
  );
}

export default App;
