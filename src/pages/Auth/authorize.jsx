import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import Store from '../Store/Store';
import MarketPlaceRepository from '../../repositories/MarketplaceRepository';

const authorize = () => {
    const navigate = useNavigate()
    
    const [accessTiktok, setAccessTiktok] = useState();
    
    const handleUrlChange = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log("code", code )
  
        if (code) {
          Cookies.set('tiktokCode', code);

        }
        tiktokToken(code)
      }

      const tiktokToken = async (code) => {
        
        const response = await MarketPlaceRepository.accessTokenTiktok(code);
        console.log("lordgent22", response)
        localStorage.setItem('tiktokData', JSON.stringify(response));
        if(response.error === false) {
          navigate("/store")
        }
        console.log("loggggg", response.status)
        if(response.status === 400) {
          navigate("/store")
          alert(response.message)
        }

        setAccessTiktok(response);
        
        return response;
      }

      useEffect(() => {
        handleUrlChange();
      }, [])

  return (
    <div>authorize</div>
  )
}

export default authorize