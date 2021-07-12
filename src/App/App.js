import { React, Component } from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import SliderAuto from '../components/Slider-Auto/SliderAuto';
import Member from '../components/Member/Member';
import HeaderTop from '../components/Header/Header';
import CartContent from '../components/CartContent/CartContent';
import ContentPage from '../components/ContentPage/ContentPage';
import SubTab from '../components/SubTab/SubTab';
import Bottom from '../components/Bottom/Bottom';
import Introduce from '../components/Introduce/introduce';
import AdminPage from '../AdminPage/AdminPage'
import BookingTicket from '../components/BookingTicket/BookingTicket'
import PriceTicket from '../components/PriceTicket/PriceTicket';
import PageNotFound404 from '../components/Page404/404';
import News from '../components/News/News';
import ScrollToTopBtn from "../components/ScrollToTop/ScrollToTop";
import Payment from '../components/Payment/Payment';
require('dotenv').config({ path: '../.env' });
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isAdmin: false, /* true là đi đến Admin, false là đi đến home */
        };
       

    }
    AdminPage = () => {
        this.load_data_user();
        return <AdminPage />
    }
    UserPage = () => {
        return (
            <div className="App">
                <div className="container-fluid">
                    <HeaderTop />
                </div>
                <div className="content">
                    <Member isLogin={false} />
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
                                        this.state.isAdmin ?
                                            <Redirect to="/Dashboard" /> :
                                            <Redirect to="/Home" />
                                    )
                                }} />
                            <Route path="/Payment">
                                <Payment />
                            </Route>
                            <Route path="/History">
                                <BookingTicket />
                            </Route>
                            <Route path="/Home">
                                <div className="sub-tab">
                                    <SubTab />
                                </div>
                            </Route>
                            <Route path="/Phim">
                                <div className="sub-tab">
                                    <SubTab />
                                </div>
                            </Route>
                            <Route path="/Lichchieu">
                            </Route>
                            <Route path="/RapvaGia">
                                <PriceTicket />
                            </Route>
                            <Route path="/Tintuc">
                                <News />
                            </Route>
                            <Route path="/Gioithieu">
                                <div className="container">
                                    <Introduce />
                                </div>
                            </Route>
                            <Route path="/PageNotFound">
                                <PageNotFound404 />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
                <div className="bottom-page">
                    <Bottom />
                </div>
                <ScrollToTopBtn />
            </div>
        )
    }
    showButton = () => {
        const loggedInUser = localStorage.getItem('user');
        if (!loggedInUser) {
            localStorage.removeItem('list_user');
            return this.UserPage();
        }
        if (loggedInUser) {
            let role = JSON.parse(loggedInUser).role;

            if (role === 'user') {
                localStorage.removeItem('list_user');
                return this.UserPage();
            } else if (role === 'staff') {
                return this.AdminPage();
            } else if (role === 'lock') {
                localStorage.removeItem('user');
                alert("Your acc")
                return this.UserPage();
            }
        }
    }
    load_data_user = () => {
        let request = new Request(`${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/load/data/user`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ req: "load-movie" })
        });
        fetch(request)
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    //console.log(result.movie)
                    localStorage.setItem('list_user', JSON.stringify(result.user));
                }
            },
                (error) => {
                    this.error = error;
                    if (error) {
                        console.log(error);
                    }
                }
            )
        return;
    }
    load_data = () => {
        let request = new Request(`${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/load/data`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ req: "load-movie" })
        });
        fetch(request)
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    //console.log(result.movie)
                    localStorage.setItem('movie', JSON.stringify(result.movie));
                    localStorage.setItem('theater', JSON.stringify(result.theater));
                    localStorage.setItem('showtime', JSON.stringify(result.showtime));
                    localStorage.setItem('cinema', JSON.stringify(result.cinema));
                }
            },
                (error) => {
                    this.error = error;
                    if (error) {
                        console.log(error);
                    }
                }
            )
        return;
    }
    render() { 
        console.log(process.env.REACT_APP_PORT);
        this.load_data();
        return (
            <div className="App">
                {this.showButton()}
            </div>
        );
    }
}