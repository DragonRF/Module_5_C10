import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import User from './components/User'
import Login from "./components/Login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/users' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
