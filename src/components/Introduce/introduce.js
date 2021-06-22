import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';

import IntroService from './introService';
import IntroSystem from './introSystem';


class introduce extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="dichvu" id="uncontrolled-tab-example">
                    <Tab eventKey="hethong" title="HỆ THỐNG">
                        {/* Your component here  */}
                        <IntroSystem />
                    </Tab>
                    <Tab eventKey="dichvu" title="DỊCH VỤ">
                        {/* Your component here */}
                        <IntroService />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default introduce;
