import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import MoviesOpen from '../Movies/MovieOpen'
import MoviesTopView from '../Movies/MovieTopView';
class SubTab extends Component {
    render() {
        return (
            <div className="container" >
                <Tabs defaultActiveKey="topview" id="uncontrolled-tab-example">
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

