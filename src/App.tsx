import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/Sidebar/SideBar';
import InvoiceCard from './components/Invoice/InvoiceCard';
import { NewInvoiceBtn } from './components/Buttons/Buttons';
import InvoiceHeader from './components/InvoiceHeader/InvoiceHeader';
import Invoice from './Pages/Invoice/Invoice';
import DisplayInvoice from './Pages/DisplayInvoice/DisplayInvoice';
import { Provider } from 'react-redux';
import store from "./Redux/store/store"
function App() {
  return (
    <div className="">
      <Provider store={store}>

        < Invoice />
      </Provider>
    </div>
  );
}

export default App;
