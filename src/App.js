import { React ,Component } from 'react';

import './App.css';
import SliderAuto from './components/Slider-Auto/SliderAuto';
import Member from './components/Member/Member';
import HeaderTop from './components/Header/Header';
import CartContent from './components/CartContent/CartContent';
import ContentPage from './components/ContentPage/ContentPage';
import Movies from './components/Movies/Movies';
import SubTab from './components/SubTab/SubTab';
import Bottom from './components/Bottom/Bottom';

class App extends Component {
    render() {
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
                    <ContentPage />
                    <div className="sub-tab">
                        <SubTab />
                    </div>
                    <div className="container">
                        <Movies />
                    </div>
                </div>
                <div className="bottom-page">
                    <Bottom />
                </div>
            </div>
        );
    }
};
export default App;