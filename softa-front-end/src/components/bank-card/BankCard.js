import React from 'react';
import './BankCard.css'

const BankCard = ()=> {
  return (
    <div className="container-card">
    <div className="card">
        <div className="form">
            <div className="left-side"> <span className="success">Success</span>
                <div className="image"> <img src="https://imgur.com/QrKJmrf.jpg"/> </div>
                <div className="debit-card">
                    <div className="card_name"> <small>Cardholder name</small> <span className="user_name">John Doe</span> </div>
                    <div className="num_expiry">
                        <div className="card_number"> <small>Card Number</small> <span className="set_card_number">0000 0000 0000 0000</span> </div>
                        <div className="card_cvv"> <small>Valid upto</small> <span className="user_card_cvv">MM/YYYY</span> </div>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <h3>Payment details</h3>
                <div className="input-text"> <input type="text" id="user_name_input" onkeyup="userName(this.value)" placeholder="Username" require/> <span>Cardholder name</span> </div>
                <div className="input-text"> <input type="text" id="user_card_number_input" placeholder="0000 0000 0000 0000" onkeyup="userCardNumber(this.value)" data-slots="0" data-accept="\d" require/> <span>Card number</span> </div>
                <div className="input-div">
                    <div className="input-text"> <input type="text" onkeyup="usercardcvv(this.value)" placeholder="MM/YYYY" data-slots="MY" require/> <span>Valid upto</span> </div>
                    <div className="input-text "> <input type="text" placeholder="000" data-slots="0" data-accept="\d" size="3" require/> <span>CVV</span> </div>
                </div>
                <div className="button"> <button className="click-pay">Pay $25.99</button> </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BankCard;
