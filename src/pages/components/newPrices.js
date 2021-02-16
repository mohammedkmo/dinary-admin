import React, { useState } from 'react';
import { NewButton } from './buttons';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useCookies} from 'react-cookie';

export default function NewPrices() {

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);


  const alert = useAlert();
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');
  const [gold, setGold] = useState('');
  const [irr, setIrr] = useState('');
  const [tryy, setTryy] = useState('');

  const handleUsdChange = async (event) => {
    setUsd(event.target.value);
  };
  const handleEurChange = async (event) => {
    setEur(event.target.value);
  };
  const handleGoldChange = async (event) => {
    setGold(event.target.value);
  };
  const handleIrrChange = async (event) => {
    setIrr(event.target.value);
  };
  const handleTryyyChange = async (event) => {
    setTryy(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post('https://api.dinary.net/prices/new', {
        usd: parseFloat(usd).toFixed(2),
        eur: parseFloat(eur).toFixed(2),
        gold: parseFloat(gold).toFixed(2),
        irr: parseFloat(irr).toFixed(2),
        try: parseFloat(tryy).toFixed(2),
      },{headers: {
        'x-auth-token': cookies.token
      }
      })
      .then((Response) => {
        if (Response.status === 200) {
          console.log(Response);
          alert.show('تمت الاضافة بنجاح');
          setUsd('');
          setEur('');
          setGold('');
          setIrr('');
          setTryy('');
        } else {
          alert.show('يرجى ادخال المعلومات بشكل صحيح');
        }
      })
      .catch((err) => {
        alert.show('يرجى ادخال المعلومات بشكل صحيح');
      });
  };

  return (
    <div>
      <form action='/getlogin' className='form' method='post'>
      <input
          className='input price-input'
          autoComplete='true'
          type='text'
          name='usd'
          placeholder='الدولار الامريكي'
          value={usd}
          onChange={handleUsdChange}
        />
        <input
          className='input price-input'
          autoComplete='true'
          type='text'
          name='eur'
          placeholder='اليورو'
          value={eur}
          onChange={handleEurChange}
        />
        <input
          className='input price-input'
          autoComplete='true'
          type='text'
          name='email'
          placeholder='الذهب'
          value={gold}
          onChange={handleGoldChange}
        />
        <input
          className='input price-input'
          autoComplete='true'
          type='text'
          name='email'
          placeholder='الريال الايراني'
          value={irr}
          onChange={handleIrrChange}
        />
        <input
          className='input price-input'
          autoComplete='true'
          type='text'
          name='email'
          placeholder='الليرة التركية'
          value={tryy}
          onChange={handleTryyyChange}
        />

        <NewButton onClick={handleSubmit}>نشر</NewButton>
      </form>
    </div>
  );
}
