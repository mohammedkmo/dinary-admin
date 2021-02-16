import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import NewPrices from './components/newPrices';
import Table from './components/table';
import axios from 'axios';
import { useCookies} from 'react-cookie';

export default function Home() {


  const [prices, setPrices] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);


  const getOut=()=>{
    removeCookie("token")
  }

  useEffect(() => {
    axios
      .get('https://api.dinary.net/prices')
      .then((response) => {
        if (response.status === 200) {
          setPrices(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },'');

  return (
    <div>
      <div className='navbar'>
        <img width='50' src={logo} alt='logo' />
        <nav>
          <ul>
            <li>
              <Link to='/account'>الحساب </Link>
            </li>
            <li>
              <button onClick={getOut}>خروج</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className='new-form'>
        <NewPrices></NewPrices>
      </div>

      <Table data={prices}></Table>
    </div>
  );
}
