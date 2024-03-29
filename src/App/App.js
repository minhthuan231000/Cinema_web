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
import PriceTicket from '../components/PriceTicket/PriceTicket';
import PageNotFound404 from '../components/Page404/404';
import News from '../components/News/News';
import ScrollToTopBtn from "../components/ScrollToTop/ScrollToTop";
import Payment from '../components/Payment/Payment';
import HistoryBooking from '../components/HistoryBooking/HistoryBooking';
import MovieSchedule from './../components/MovieSchedule/MovieSchedule';
import BookingForm from '../components/BooingForm/BookingForm';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const DOMAIN = process.env.REACT_APP_DOMAIN;
const loggedInUser = cookies.get('user');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isAdmin: false }/* true là đi đến Admin, false là đi đến home */
    }
    // check admin
    componentDidMount() {
        if (loggedInUser) {
            const request = new Request(`${DOMAIN}/api/user/` + loggedInUser.id, {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json' })
            });
            fetch(request)
                .then(res => res.json())
                .then((result) => {
                    if (result) {
                        this.setState({ isAdmin: result.data.isAdmin });
                    }
                }
                )
        }
    }

    AdminPage = () => {
        return <AdminPage loggedInAdmin={false} />
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
                                        <Redirect to="/Home" />
                                    )
                                }} />
                            <Route path="/BookingForm">
                                <BookingForm />
                            </Route>
                            <Route path="/LichChieu">
                                <MovieSchedule />
                            </Route>
                            <Route path="/Payment">
                                <Payment />
                            </Route>
                            <Route path="/History">
                                <HistoryBooking />
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

    showButton = (isAdmin) => {
        this.load_data();
        if (!loggedInUser) {
            return this.UserPage();
        }
        if (loggedInUser) {
            if (isAdmin === false) {
                return this.UserPage();
            } else if (isAdmin === true) {
                return this.AdminPage();
            }
        }

    }

    load_data = async () => {
        console.log(DOMAIN);
        let request = new Request(`${DOMAIN}/load/data`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        await fetch(request)
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    localStorage.setItem('movie', JSON.stringify(result.movie));
                    localStorage.setItem('theater', JSON.stringify(result.theater));
                    localStorage.setItem('showtime', JSON.stringify(result.showtime));
                    localStorage.setItem('cinema', JSON.stringify(result.cinema));
                }
            },
                (error) => {
                    if (error) {
                        console.log(error);
                    }
                }
            )
        return;
    }
    render() {
        return (
            <div>
                {this.showButton(this.state.isAdmin)}
            </div>
        );
    }
}