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
import Movies from '../components/Movies/Movies';
import SubTab from '../components/SubTab/SubTab';
import Bottom from '../components/Bottom/Bottom';
import Introduce from '../components/Introduce/introduce';
import AdminPage from '../AdminPage/AdminPage'
import BookingTicket from '../components/BookingTicket/BookingTicket'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false, /* true là đi đến Admin, false là đi đến home */
        };
    }
    AdminPage = () => {
        return <AdminPage />
    }
    UserPage = () => {
        return <div className="App">
            <BrowserRouter>
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
                        <Route path="/shopping">
                            <BookingTicket />
                        </Route>
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
                        </Route>
                        <Route path="/login">
                        </Route>
                        <Route path="/register">
                        </Route>
                    </Switch>
                </div>
                <div className="bottom-page">
                    <Bottom />
                </div>
            </BrowserRouter>
        </div>
    }
    showButton = () => {
        const loggedInUser = localStorage.getItem('user');
        if(!loggedInUser){
            return this.UserPage();
        }
        if(loggedInUser){
        let role = JSON.parse(loggedInUser).role;
        
            if(role === 'user' ){
                console.log(role)
                return this.UserPage();
            }else if(role === 'staff'){
                return this.AdminPage()
            }
        }
    }
    render() {
        return (
            <div className="App">
                {this.showButton()}
            </div>
        );
    }
}