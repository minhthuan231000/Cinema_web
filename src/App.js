import { React, Component } from 'react';
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


import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from '../src/components/Dashboard/Dashboard';
import Introduce from './components/Introduce/introduce';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
          name: "React",
          isUserAuthenticated: true
        };
      }
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <HeaderTop />
                </div>
                <div className="content">
                    <Member />
                    <SliderAuto />
                </div>
                <div className="cart-content">
                    <CartContent />
                </div>
                <div className="content-page">
                    <ContentPage />
                    <BrowserRouter>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => {
                                    return (
                                        this.state.isUserAuthenticated ?
                                            <Redirect to="/Home" /> :
                                            <Redirect to="/Home" />
                                    )
                                }} />
                            <Route path="/Home">
                                <div className="sub-tab">
                                    <SubTab />
                                </div>
                                <Movies />
                            </Route>
                            <Route path="/Phim">
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
                                <div className="container">
                                <Introduce />
                                </div>
                            </Route>
                            <Route path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route path="/login">
                            </Route>
                            <Route path="/register">
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
                <div className="bottom-page">
                    <Bottom />
                </div>
            </div>
        );
    }
};