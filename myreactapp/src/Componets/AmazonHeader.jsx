import React from 'react'
import '../CSS/Aamazon.css'
import logo from '../images/logo.PNG'
import india from '../images/india.webp'


export default function Amazonheader() {
    return (
        <>

            <header className="myheader">
                <div className="main-header">
                    <img src={logo} alt="" />
                    <div className="delivery">
                        <div>
                            <i className="bi bi-geo-alt"></i>
                        </div>
                        <div>
                            <p>Delivering to Chennai 600002</p>
                            <h2>Update location</h2>
                        </div>
                    </div>
                    <div className="select">
                        <select>
                            <option value="#">All</option>
                            <option value="#">All categories</option>
                            <option value="#">Amazon Fashion</option>
                            <option value="#">Amazon Devices</option>
                            <option value="#">Amazon Fresh meat</option>
                            <option value="#">Amazon baby toys</option>
                            <option value="#">Amazon beauty</option>
                            <option value="#">Amazon appliance</option>
                        </select>
                        <input type="text" placeholder="Search Amazon.in" />
                        <div>
                            <i className="bi bi-search"></i>
                        </div>
                    </div>
                    <div className="india">
                        <img src={india} alt="" />
                        <h2>EN</h2>
                        <i className="bi bi-caret-down-fill"></i>
                    </div>
                    <div className="lineheight">
                        <p>Hello, Sign in</p>
                        <h2>Account&Lists</h2>
                    </div>
                    <div className="lineheight">
                        <p>Returns</p>
                        <h2>&amp; Orders</h2>
                    </div>
                    <div className="cart">
                        <i className="bi bi-cart"></i>
                        <p>0</p>
                        <h2>Cart</h2>
                    </div>
                </div>
            </header>

        </>
    )
}

