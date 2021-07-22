import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import MoviesOpen from '../Movies/MovieOpen'
import MoviesTopView from '../Movies/MovieTopView';
import Movie from '../Movies/Movies';
class SubTab extends Component {
    render() {
        return (
            <div className="container" >
                <Tabs defaultActiveKey="view" id="uncontrolled-tab-example">
                    <Tab eventKey="view" title="Tất cả">
                        {/* Your component here */}
                        <Movie />
                    </Tab>
                    <Tab eventKey="topview" title="Xem nhiều">
                        {/* Your component here  */}
                        <MoviesTopView />
                    </Tab>
                    <Tab eventKey="newview" title="Mới công chiếu">
                        {/* Your component here */}
                        <MoviesOpen />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default SubTab;

