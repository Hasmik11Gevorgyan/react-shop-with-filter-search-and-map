import { useState } from "react";
import React  from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";


const showOrders = (props)=> {
  let summa = 0;
  props.orders.forEach(el => summa+= Number.parseFloat(el.price)) 
  return (<div>
    {props.orders.map(el => {
      <Order onDelete={props.onDelete}key={el.id} item = {el}/>
    })}
    <p className="summa">Summa : {summa}</p>
  </div>
  )
};
const  showNothing = (props)=> {
return (
  <div>
   <h2> EMPTY </h2> 
  </div>
)
}
export default function Header(props) {
  let [cardOpen, setCardOpen]= useState(false)
  return (
    <header>
        <div>
 <span className='logo'>
   House Staff
 </span>
 <ul className='nav'>
    <li>About</li>
    <li>Home</li>
    <li>Contacts</li>
 </ul>
 <FaShoppingCart onClick={() => setCardOpen(cardOpen = !cardOpen)}  className={`shop-card-button ${cardOpen && `active`} `}/>
       
       {cardOpen && (
        <div className="shop-card"> 
        {props.orders.length > 0 ? showOrders(props) : showNothing()}
         </div>
       )}
        </div>
        <div className='presentation'>

        </div>
    </header>
  )
}
