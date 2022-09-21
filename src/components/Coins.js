import React from 'react'
import CoinItem from '../components/CoinItem'
import {Link} from 'react-router-dom'
import '../components/Coins.css'



const Coins = (props) => {
  return (
    <div>

        <div className='conteiner'>
            
                <div className="heading">
                    <p>*</p>
                    <p className='coin-name'>coins</p>
                    <p>ucret(usd)</p>
                    <p>24s</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Market</p>
                </div>

               {props.coins.map(coins=>
               {
                return(
                    <CoinItem coins={coins} />


                )
               }


               )} 
        </div>
    </div>
    )
}

export default Coins