import { React } from 'react';
import './App.css';

// Components:
import SliderAuto from './components/Slider-Auto/SliderAuto';
import Member from './components/Member/Member';
import HeaderTop from './components/Header/Header';
import CartContent from './components/CartContent/CartContent';
import ContentPage from './components/ContentPage/ContentPage';
import Movies from './components/Movies/Movies';
import SubTab from './components/SubTab/SubTab';
import Bottom from './components/Bottom/Bottom';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../src/components/LoginForm/Login';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Preferences from '../src/components/Preferences/Preferences';
export default function App(){
    return (
        <div className="App">
            <header className="App-header">
                <HeaderTop />
            </header>
            <div className="content">
                <Member />
                <SliderAuto />
            </div>
            <div className="cart-content">
                <CartContent />
            </div>
            <div className="content-page">
                <BrowserRouter>
                <Switch>
                    <Route path="/Phim">
                        <ContentPage />
                        <div className="sub-tab">
                            <SubTab />
                        </div>
                        <Movies />
                    </Route>
                    <Route path="/Lichchieu">

                    </Route>
                    <Route path="/RapvaGia">

                    </Route>
                    <Route path="/Tintuc">
                        
                    </Route>
                    <Route path="/Gioithieu">
                        
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Preferences />
                    </Route>
                </Switch>
                </BrowserRouter>
                
            </div>
            <div className="bottom-page">
                <Bottom />
            </div>
        </div>
    );
};