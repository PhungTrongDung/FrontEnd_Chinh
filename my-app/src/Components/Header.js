import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/header.css'

function Header () {
    return (
        <div class="main">
        <header>
            <div class="header-container">
                <div class="header-logo-container">
                    <div class="header-logo">
                        <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Square.png" alt=""></img>
                    </div>
                </div>
                <div class="header-content">
                    <div class="nav-top">
                        <div class="col2 nav-top-right">
                            <ul class="nav-log">
                                <li class="log sign-in">
                                    <button class="">Đăng nhập</button>
                                </li>
                                <li class="log sign-up">
                                    <button class="">Đăng kí</button>
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nav-bottom">
                        <ul class="nav-main">
                            <li><a href="/">Home</a></li>
                            <li><a href="/wallet">Wallet</a></li>
                            <li><a href="/transactions">Transactions</a></li>
                            <li><a href="/category">Category</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </header>
    </div>
    );
}

export default Header;